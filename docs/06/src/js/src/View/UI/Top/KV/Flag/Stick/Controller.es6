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
    this.base = Base(this.posi, this.color, this.r);
    this.base2 = Base2(this.posi, this.color, this.r);
    this.cap = Cap(this.posi, this.color, this.r + 7, this.r);
    this.obj.add(this.base);
    this.obj.add(this.base2);
    this.obj.add(this.cap);
    this.chobisens = [];
    this.getMesh(this.obj).map(obj => {
      if (obj.name == "chobiline") this.chobisens.push(obj);
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

  show() {
    const tl = new TimelineMax();
    this.getMesh(this.obj).forEach((obj, index) => {
      tl.to(
        obj.material,
        1,
        {
          opacity: 1,
          ease: Expo.easeOut
        },
        index * 0
      );
    });

    return tl;
  }

  getMesh(obj) {
    const arr = [];
    obj.children.forEach(children => {
      if (children.type == "Group") {
        arr.push(...this.getMesh(children));
      } else {
        arr.push(children);
      }
    });
    return arr;
  }
}
