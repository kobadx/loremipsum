import Base from "../Base/Controller.es6";
import gsap from "gsap";
export default class Controller extends Base {
  constructor() {
    super();
  }

  init() {
    this.name = "DomController";
  }

  show() {
    const header = $(".header");
    const lead = $(".index-kv-lead");
    const tit = $(".index-kv-title");
    const tl = gsap.timeline();
    tl.to(
      header,
      1,
      {
        opacity: 1,
        ease: "expo.out"
      },
      0
    );
    tl.to(
      lead,
      1,
      {
        opacity: 1,
        ease: "expo.out"
      },
      0
    );
    tl.to(
      tit,
      1,
      {
        opacity: 1,
        ease: "expo.out"
      },
      0
    );
    return tl;
  }

  setEvent() {
    super.__setUpdateFlag(false);
  }

  reset() {}
}
