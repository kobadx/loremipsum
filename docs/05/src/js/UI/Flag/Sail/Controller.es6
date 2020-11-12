import Line from "./Line/Obj.es6";
import gsap from "gsap";
const noise = require("simplenoise");
export default class Controller {
  constructor(posi, num) {
    this.posi = posi;
    this.LENGTH = 1000;
    this.obj = new THREE.Group();
    this.width = 15;
    this.lines = [];

    // 可変 線の個数？
    this.NUM =
      (this.verticalLength / this.width) % 2
        ? this.verticalLength / this.width
        : this.verticalLength / this.width - 1;

    // this.NUM = 1;

    this.param = {
      height: 50,
      speed: 3,
      細かさ: 30,
    };

    this.setup();
    this.setEvents();
  }

  setup() {
    // create line
    for (let i = 0; i < this.NUM; i++) {
      const points = [];
      const p = {
        x: this.getVector(i).x + this.posi[0].x,
        y: this.getVector(i).y + this.posi[0].y,
        z: this.getVector(i).z + this.posi[0].z,
      };
      const line = new Line([p], {
        height: this.param.height,
        i: this.param.speed,
        offset: this.param["細かさ"],
        num: (100 - Math.abs(this.NUM * 0.5 - i) * 4.3) * 1.4,
      });
      this.obj.add(line.obj);
      this.lines.push(line);
    }

    // layout
    this.obj.position.x = 30;
    // this.obj.position.y = -35;
  }

  getVector(index) {
    const v = new THREE.Vector3(
      this.posi[0].x - this.posi[1].x,
      this.posi[0].y - this.posi[1].y,
      this.posi[0].z - this.posi[1].z
    ).normalize();

    return v.multiplyScalar(-index * this.width);
  }

  get verticalLength() {
    return (
      new THREE.Vector3(
        this.posi[0].x - this.posi[1].x,
        this.posi[0].y - this.posi[1].y,
        0
      ).length() * 0.79
    );
  }

  update() {
    const time = Date.now() / 5000 + (Math.random() / 300) * 2 - 1 / 300;
    // noise.seed(time);
    // console.log(this.lines);

    // update line
    this.lines.forEach((line, index) => {
      // const time = (index + 1) * 0.0001;

      // noise
      // const i = index / window.noiseparam.wave;
      // let n = noise.perlin2(i, time) * 10;
      // n = Math.abs(n) > 5 ? n * 0.8 : n;
      line.update(index);
    });
  }

  show() {
    const tl = gsap.timeline();

    tl
      // draw line
      .add(() => {
        this.lines.forEach((line, index) => {
          line.drawLine();
        });
      }, 0.0)

      // spread
      .add(() => {
        this.lines.forEach((line, index) => {
          line.spread();
        });

        // positionを正しい位置に
        TweenMax.to(this.obj.position, 3.0, {
          y: -35,
          ease: Power2.easeInOut,
        });
      }, 1.5);
  }

  setEvents() {
    this.ookisa = 1;
    this.yureY = 1;
    this.yureZ = 1;

    // param
    console.log(dat);
    const _dat = dat.addFolder("旗");
    _dat
      .add(this, "ookisa", 0, 3, 0.01)
      .name("揺れの大きさ")
      .onChange((e) => {
        this.lines.forEach((line, i) => {
          line.ookisa = e;
        });
      });
    _dat
      .add(this, "yureY", 0, 3, 0.01)
      .name("揺れの細かさY")
      .onChange((e) => {
        this.lines.forEach((line, i) => {
          line.yureY = e;
        });
      });
    _dat
      .add(this, "yureZ", 0, 3, 0.01)
      .name("揺れの細かさZ")
      .onChange((e) => {
        this.lines.forEach((line, i) => {
          line.yureZ = e;
        });
      });

    // param
    // const _dat = dat.addFolder("旗");
    // _dat.add(this.param, "揺れの大きさ", 0, 500).onChange((e) => {});
    // _dat.add(this.param, "speed", 0, 10, 0.1).onChange((e) => {
    //   this.lines.forEach((line, i) => {
    //     line.config.i = e;
    //   });
    // });
    // _dat.add(this.param, "細かさ", 0, 1000).onChange((e) => {
    //   this.lines.forEach((line, i) => {
    //     line.config.offset = e;
    //   });
    // });
  }
}
