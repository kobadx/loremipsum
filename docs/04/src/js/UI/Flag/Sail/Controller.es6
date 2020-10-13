import Line from "./Line/Obj.es6";
import * as dat from "dat.gui";
export default class Controller {
  constructor(posi, num) {
    this.posi = posi;
    this.LENGTH = window.innerWidth * 0.6;
    this.obj = new THREE.Group();
    this.width = 10;
    this.lines = [];
    this.NUM = this.verticalLength / this.width;
    // this.NUM = 1;
    this.param = {
      height: 50,
      i: 3,
      offset: 100
    };
    this.setup();
  }

  setup() {
    for (let i = 0; i < this.NUM; i++) {
      const points = [];
      const p = {
        x: this.getVector(i).x + this.posi[0].x + 10,
        y: this.getVector(i).y + this.posi[0].y
      };
      const line = new Line(
        [
          {
            x: p.x,
            y: p.y
          }
        ],
        {
          height: 50 + i,
          i: 3,
          offset: 100
        }
      );
      this.obj.add(line.obj);
      this.lines.push(line);
    }

    this.dat = new dat.GUI();
    this.dat.add(this.param, "height", 50, 500).onChange(e => {
      this.lines.forEach((line, i) => {
        line.config.height = i + e;
      });
    });
    this.dat.add(this.param, "i", 1, 10, 0.1).onChange(e => {
      this.lines.forEach((line, i) => {
        line.config.i = e;
      });
    });
    this.dat.add(this.param, "offset", 10, 1000).onChange(e => {
      this.lines.forEach((line, i) => {
        line.config.offset = e;
      });
    });
  }

  getVector(index) {
    const v = new THREE.Vector3(
      this.posi[0].x - this.posi[1].x,
      this.posi[0].y - this.posi[1].y,
      0
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
    this.lines.forEach(line => {
      line.update();
    });
  }
}
