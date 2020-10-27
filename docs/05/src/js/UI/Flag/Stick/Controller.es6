import { Base } from "./Parts/Base.es6";
import { Base2 } from "./Parts/Base2.es6";
import { Cap } from "./Parts/Cap.es6";
export default class Controller {
  constructor(posi, r) {
    this.posi = posi;
    this.r = r;
    this.obj = new THREE.Group();
    this.color = 0x0047e9;
    this.setup();
  }

  setup() {
    //line
    this.obj.add(Base(this.posi, this.color, this.r));
    this.obj.add(Base2(this.posi, this.color, this.r));
    this.obj.add(Cap(this.posi, this.color, this.r + 7, this.r));
  }

  update() {}
}
