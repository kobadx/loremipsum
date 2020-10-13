import Obj from "./Line/Obj.es6";

export default class Controller {
  constructor(posi, num) {
    this.posi = posi;
    this.lines = [];
    this.obj = new THREE.Group();
    this.setup();
  }

  setup() {
    for (let i = 0; i < 10; i++) {
      const line = new Obj(
        [
          {
            x: this.posi[0].x,
            y: this.posi[0].y - 10 * i
          }
        ],
        {
          height: 30 + i * 5,
          i: 2,
          offset: 10
        }
      );
      this.obj.add(line.obj);
      this.lines.push(line);
    }
  }

  update() {
    this.lines.forEach(line => {
      line.update();
    });
  }
}
