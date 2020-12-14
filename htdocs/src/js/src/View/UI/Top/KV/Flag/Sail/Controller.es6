import Line from "./Line/Obj.es6";

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

    console.log(this.NUM);

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
        num: (100 - Math.abs(this.NUM * 0.5 - i) * 4.3) * 1.3,
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
    const tl = new TimelineMax();

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

        // positionを正しい位置に;
        TweenMax.to(this.obj.position, 2.5, {
          y: -35,
          ease: Expo.easeInOut,
        });
      }, 1.5);
  }

  setColor(isWhite) {
    var c1 = new THREE.Color("#ffffff");
    var c2 = new THREE.Color("#0047e9");

    if (isWhite) var c = c1;
    else var c = c2;

    this.lines.forEach((line, index) => {
      line.obj.material.color = c;
    });
  }

  setEvents() {}
}
