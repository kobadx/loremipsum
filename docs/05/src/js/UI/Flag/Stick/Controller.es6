import { Base } from "./Parts/Base.es6";
import { Base2 } from "./Parts/Base2.es6";
import { Cap } from "./Parts/Cap.es6";
const noise = require("simplenoise");
export default class Controller {
  constructor(posi, r) {
    this.posi = posi;
    this.r = r;
    this.obj = new THREE.Group();
    this.color = 0x0047e9;
    this.TIME = 0;
    this.setup();
  }

  setup() {
    //line
    this.obj.add(Base(this.posi, this.color, this.r));
    this.obj.add(Base2(this.posi, this.color, this.r));
    this.obj.add(Cap(this.posi, this.color, this.r + 7, this.r));
    this.chobisens = [];
    this.obj.children[1].children.map(obj => {
      obj.children.map(obj2 => {
        obj2.children.map(obj3 => {
          if (obj3.name == "chobiline") this.chobisens.push(obj3);
        });
      });
    });

    console.log(this.chobisens[0].geometry.attributes.position.array);
  }

  update() {
    const time = Date.now() / 5000;
    ++this.TIME;
    this.chobisens.forEach(obj => {
      const points = obj.geometry.attributes.position.array;
      const l = points.length;
      for (var i = 0; i < l; i++) {
        if (i % 3 == 2 && i != 2) {
          obj.geometry.attributes.position.needsUpdate = true;
          const n = noise.perlin2(i, time);
          const p = this.sin(this.TIME * -1, i) * n;

          points[i] += p * 0.5;
        }
      }
    });
  }

  sin(t, i) {
    return 2 * Math.sin((t * 3 + i) / 20);
  }
}
