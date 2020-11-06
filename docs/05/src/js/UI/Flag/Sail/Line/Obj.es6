const noise = require("simplenoise");
import Node from "./Node.es6";

export default class Controller {
  constructor(posi, config) {
    //height,i,offset,offset_x
    this.posi = posi;
    this.config = config;
    this.NUM = 200;
    this.TIME = 0;
    this.fixDist = 1;
    this.color = 0x0047e9;

    this.noiseOffset0 = this.random(-100000, 100000);
    this.noiseOffset1 = this.random(-100000, 100000);
    this.noiseScale = 0.01;
    // this.noiseTime = this.random(-1000000, 1000000);
    this.noiseTime = 0;
    this.noiseTime2 = 100000;
    this.rad = 0;
    this.maxSpeed = 5;

    this.start = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
    };

    this.setup();
  }

  setup() {
    this.nodes = [];
    this.points = [];
    for (let i = 0; i < this.config.num; i++) {
      var x = this.posi[0].x + i * 10;
      var y = this.posi[0].y + this.sin(0, i);
      var z = this.posi[0].z;

      var node = new Node(x, y, z);

      this.nodes.push(node);
      this.points.push(node.x, node.y, node.z);
    }

    // geometry
    const geometry = new THREE.BufferGeometry();
    // const positions = new Float32Array(100 * 3); // ここなんで？
    const positions = new Float32Array(this.config.num * 3); // ここなんで？
    geometry.addAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(this.points), 3)
    );

    // mat
    const material = new THREE.LineBasicMaterial({
      color: this.color,
      blending: THREE.AdditiveBlending,
    });
    this.obj = new THREE.Line(geometry, material);

    this.pointsNUM = this.obj.geometry.attributes.position.array.length;
  }

  // oka
  // update(n = 1, index) {
  //   ++this.TIME;

  //   for (let i = 0; i < this.pointsNUM; i++) {
  //     // zの値を動かす
  //     if (i % 3 == 2) {
  //       // yの値を動かす
  //       // if (i % 3 == 2) {
  //       // update
  //       // const p =
  //       //   n *
  //       //   Math.abs(Math.sin(((i + 20) / this.NUM / 3) * Math.PI)) *
  //       //   this.sin(this.TIME * -1, i);
  //       const p =
  //         Math.abs(Math.sin(((i + 20) / this.NUM / 3) * Math.PI)) *
  //         this.sin(this.TIME * -1, i);

  //       this.obj.geometry.attributes.position.array[i] = p;
  //     }
  //   }

  // 深津さん
  //   // draw
  //   this.obj.geometry.attributes.position.needsUpdate = true;

  //   // position
  //   // const time = (Date.now() - 1000) / 2000;
  //   // const r = noise.perlin2(index, time) * window.noiseparam.line;
  //   // this.obj.position.x = noise.perlin2(n, this.TIME) ;
  //   // this.obj.position.y = u * window.noiseparam.line;
  //   // this.obj.position.x = u * window.noiseparam.line;
  //   // this.obj.position.z = u * window.noiseparam.line;
  // }

  // update(n = 1, index) {
  //   ++this.TIME;
  //   this.noiseTime += 0.01;
  //   this.rad += 0.01;

  //   // update
  //   for (let i = 0; i < this.config.num; i++) {
  //     if (i == 0) {
  //       var nd = this.nodes[i];

  //       // this.maxSpeed = 7 + Math.cos(this.rad) * 4;
  //       // this.start.vx +=
  //       //   noise.simplex3(
  //       //     this.start.x * this.noiseScale,
  //       //     this.start.y * this.noiseScale,
  //       //     this.noiseOffset0 + this.noiseTime
  //       //   ) * 0.2;
  //       // this.start.vy +=
  //       //   noise.simplex3(
  //       //     this.start.x * this.noiseScale + 2398523,
  //       //     this.start.y * this.noiseScale + 1309854,
  //       //     this.noiseOffset1 + this.noiseTime
  //       //   ) * 0.2;
  //       // this.start.vx *= 0.99;
  //       // this.start.vy *= 0.99;
  //       // this.start.x += this.start.vx + this.random(-0.5, 0.5);
  //       // this.start.y += this.start.vy + this.random(-0.5, 0.5);

  //       // nd.x = this.start.x;
  //       // nd.y = this.start.y;
  //       nd.x = 0;
  //       nd.y = noise.simplex2(nd.x * 0.0001, this.noiseTime) * 30;
  //     } else {
  //       var nd0 = this.nodes[i - 1];
  //       var nd1 = this.nodes[i];
  //       var fx = 0;
  //       var fy = 0;
  //       var dx = nd0.x - nd1.x;
  //       var dy = nd0.y - nd1.y;
  //       var dist = Math.sqrt(dx * dx + dy * dy);
  //       if (dist > 10) {
  //         var f = (this.fixDist - dist) * 0.1;
  //         fx = (dx / dist) * f;
  //         fy = (dy / dist) * f;
  //       }
  //       nd1.vx -= fx;
  //       // this.random(-0.3, 0.3) +
  //       // 1 *
  //       //   noise.simplex3(
  //       //     nd1.x * this.noiseScale,
  //       //     nd1.y * this.noiseScale,
  //       //     this.noiseOffset0 + this.noiseTime
  //       //   );
  //       nd1.vy -= fy;
  //       // this.random(-0.3, 0.3) +
  //       // 1 *
  //       //   noise.simplex3(
  //       //     nd1.x * this.noiseScale + 2398523,
  //       //     nd1.y * this.noiseScale + 1309854,
  //       //     this.noiseOffset1 + this.noiseTime
  //       //   );
  //       nd1.vx *= 0.93;
  //       nd1.vy *= 0.93;

  //       // var maxSpeed = 5;
  //       var maxSpeed = this.maxSpeed;
  //       var speed = Math.sqrt(nd1.vx * nd1.vx + nd1.vy * nd1.vy);
  //       if (speed > maxSpeed) {
  //         nd1.vx = (nd1.vx / speed) * maxSpeed;
  //         nd1.vy = (nd1.vy / speed) * maxSpeed;
  //       }

  //       nd1.x += nd1.vx;
  //       nd1.y += nd1.vy;
  //     }
  //   }

  //   // draw
  //   for (let i = 0; i < this.config.num; i++) {
  //     var y = this.nodes[i].y;

  //     this.obj.geometry.attributes.position.array[i * 3 + 1] = y;
  //   }

  //   // draw
  //   this.obj.geometry.attributes.position.needsUpdate = true;
  // }

  update(n = 1, index) {
    this.noiseTime += 0.005;
    this.noiseTime2 += 0.002;

    // update
    for (let i = 0; i < this.config.num; i++) {
      var nd = this.nodes[i];

      // nd.y +=
      //   noise.simplex3(
      //     nd.x * this.noiseScale + 2398523,
      //     nd.y * this.noiseScale + 1309854,
      //     index + this.noiseTime
      //   ) * 1;
      nd.y =
        nd.defy +
        noise.simplex2(index * 0.1 + nd.x * 0.002, this.noiseTime) * 15;
      nd.z =
        nd.defz +
        noise.simplex2(index * 0.05 + nd.x * 0.002, this.noiseTime2) * i * 3.5;
    }

    // draw
    for (let i = 0; i < this.config.num; i++) {
      var y = this.nodes[i].y;
      var z = this.nodes[i].z;

      this.obj.geometry.attributes.position.array[i * 3 + 1] = y;
      this.obj.geometry.attributes.position.array[i * 3 + 2] = z;
    }

    // draw
    this.obj.geometry.attributes.position.needsUpdate = true;
  }

  sin(t, i) {
    return (
      this.config.height *
      Math.sin((t * this.config.i + i) / this.config.offset)
    );
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
  random(min, max) {
    return Math.random() * (max - min) + min;
  }
  // 0から範囲内でランダムな整数を取得
  // -----------------------------------
  // @val : 範囲(int)
  // return : ランダムな整数(int)
  // -----------------------------------
  range(val) {
    return this.randomInt(-val, val);
  }
}
