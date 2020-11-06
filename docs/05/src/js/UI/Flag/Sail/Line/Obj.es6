const noise = require("simplenoise");
export default class Controller {
  constructor(posi, config) {
    //height,i,offset,offset_x
    this.posi = posi;
    this.config = config;
    this.NUM = 200;
    this.TIME = 0;
    this.color = 0x0047e9;
    this.setup();
  }

  setup() {
    const points = [];
    this.r = 0;
    for (let i = 0; i < this.config.num; i++) {
      const x = this.posi[0].x + i * 10;
      points.push(x, this.posi[0].y + this.sin(0, i), this.posi[0].z);
    }
    // const line = new MeshLine();
    // line.setGeometry(points);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(100 * 3);
    geometry.addAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(points), 3)
    );
    const material = new THREE.LineBasicMaterial({ color: this.color });
    this.obj = new THREE.Line(geometry, material);

    this.pointsNUM = this.obj.geometry.attributes.position.array.length;
    // console.log(this.obj);
  }

  sin(t, i) {
    return (
      this.config.height *
      Math.sin(this.r + (t * this.config.i + i) / this.config.offset)
    );
  }

  update(n = 1, index) {
    ++this.TIME;
    let u = 0;
    for (let i = 0; i < this.pointsNUM; i++) {
      if (i % 3 == 2) {
        this.obj.geometry.attributes.position.needsUpdate = true;
        const p =
          n *
          Math.abs(Math.sin(((i + 20) / this.NUM / 3) * Math.PI)) *
          this.sin(this.TIME * -1, i);
        u += p / this.pointsNUM;
        // console.log(noise.perlin2(p, i), p);
        this.obj.geometry.attributes.position.array[i] = p;
      }
    }
    // const time = (Date.now() - 1000) / 2000;
    // const r = noise.perlin2(index, time) * window.noiseparam.line;
    // this.obj.position.x = noise.perlin2(n, this.TIME) ;
    // this.obj.position.y = u * window.noiseparam.line;
    // this.obj.position.x = u * window.noiseparam.line;
    // this.obj.position.z = u * window.noiseparam.line;
  }
}
