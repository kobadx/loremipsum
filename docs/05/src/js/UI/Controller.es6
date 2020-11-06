import Base from "./Base/Controller.es6";
import Flag from "./Flag/Controller.es6";
import Dom from "./Dom/Controller.es6";
export default class Controller extends Base {
  constructor() {
    super();
  }

  init() {
    this.name = "UIController";
    this.flag = new Flag();
    this.dom = new Dom();
    this.timeline();
  }

  timeline() {
    var tl = new TimelineMax({ delay: 0.0 });

    tl
      // ------------------------------------------------------------
      // canvas
      // ------------------------------------------------------------
      .add(() => {
        this.flag.show();
      }, 1.0)
      // ------------------------------------------------------------
      // dom
      // ------------------------------------------------------------
      .add(() => {
        this.dom.show();
        // this.Dom.timeline();
      }, 1);
  }

  setEvent() {
    super.__setUpdateFlag(false);
  }

  reset() {}
}
