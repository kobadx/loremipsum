//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "_MyLibs/Util/Base.es6";

import Hover from "./Hover/Controller.es6";

export default class Controller extends Base {
  constructor({ $btn, $contents }) {
    super();
    this.$btn = $btn;
    this.$contents = $contents;
    this.setup();
    this.setEvents();
  }

  setup() {
    this.$contents.find(".menu-item").each((i, e) => {
      new Hover(e);
    });
  }

  timeline() {}

  update() {}

  show() {
    const tl = new TimelineMax();
    tl.to(this.$contents, 1, {
      opacity: 1,
      ease: Expo.easeOut,
      onComplete: () => {
        this.$contents.addClass("is-active");
      }
    });
  }

  hide() {
    const tl = new TimelineMax();
    tl.to(this.$contents, 1, {
      opacity: 0,
      ease: Expo.easeOut,
      onComplete: () => {
        this.$contents.removeClass("is-active");
      }
    });
  }

  onResize() {}

  setEvents() {
    super.setEvents();

    this.$btn.on("click", e => {
      this.show();
    });
    this.$contents.find(".menu-close").on("click", e => {
      this.hide();
    });
  }
}
