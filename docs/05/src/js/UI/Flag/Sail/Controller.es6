import Line from "./Line/Obj.es6";

const noise = require("simplenoise");
export default class Controller {
  constructor(posi, num) {
    this.posi = posi;
    this.LENGTH = 1000;
    this.obj = new THREE.Group();
    this.width = 8;
    this.lines = [];

    // 可変 線の個数？
    // this.NUM =
    //   (this.verticalLength / this.width) % 2
    //     ? this.verticalLength / this.width
    //     : this.verticalLength / this.width - 1;

    this.NUM = 1;

    this.param = {
      height: 50,
      speed: 3,
      細かさ: 20,
    };

    this.setup();
    this.setEvents();
  }

  setup() {
    // create line
    for (let i = 0; i < this.NUM; i++) {
      const points = [];
      const p = {
        x: this.getVector(i).x + this.posi[0].x + 10,
        y: this.getVector(i).y + this.posi[0].y,
        z: this.getVector(i).z + this.posi[0].z,
      };
      const line = new Line([p], {
        height: this.param.height,
        i: this.param.speed,
        offset: this.param["細かさ"],
        num: 100 - Math.abs(this.NUM * 0.5 - i) * 2.5,
      });
      this.obj.add(line.obj);
      this.lines.push(line);
    }
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
      ).length() * 0.7
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
      const i = index / window.noiseparam.wave;
      let n = noise.perlin2(i, time) * 10;
      // n = Math.abs(n) > 5 ? n * 0.8 : n;
      line.update(n, index);
    });
  }

  setEvents() {
    // param
    this.obj.position.x = 30;
    const _dat = dat.addFolder("flag");
    _dat.add(this.param, "height", 0, 500).onChange((e) => {
      this.lines.forEach((line, i) => {
        line.config.height = i + e;
      });
    });
    _dat.add(this.param, "speed", 0, 10, 0.1).onChange((e) => {
      this.lines.forEach((line, i) => {
        line.config.i = e;
      });
    });
    _dat.add(this.param, "細かさ", 0, 1000).onChange((e) => {
      this.lines.forEach((line, i) => {
        line.config.offset = e;
      });
    });

    const noisedat = dat.addFolder("noise");
    window.noiseparam = {
      line: 2,
      wave: 70,
      // wave2: 70
    };
    noisedat.add(window.noiseparam, "line", 0, 2);
    noisedat.add(window.noiseparam, "wave", 0, this.lines.length * 4);
    // noisedat.add(window.noiseparam, "wave2", 1, );
  }
}
