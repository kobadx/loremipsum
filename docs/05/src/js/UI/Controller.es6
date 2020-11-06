import Base from "./Base/Controller.es6";
import Flag from "./Flag/Controller.es6";
export default class Controller extends Base {
  constructor() {
    super();
  }

  init() {
    this.name = "UIController";

    this.timeline();
  }

  timeline() {
    var tl = new TimelineMax({ delay: 0.0 });

    tl
      // ------------------------------------------------------------
      // canvas
      // ------------------------------------------------------------
      .add(() => {
        this.flag = new Flag();
      }, 1.0)
      // ------------------------------------------------------------
      // dom
      // ------------------------------------------------------------
      .add(() => {
        // this.Dom.timeline();
      }, 0.5);
  }

  setEvent() {
    super.__setUpdateFlag(false);
  }

  reset() {}
}
