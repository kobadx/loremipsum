//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "_MyLibs/Util/Base.es6";

export default class Controller extends Base {
  constructor($ele, targetClass) {
    super();
    this.$ele = $ele;
    this.targetClass = targetClass;
    this.setup();
    this.setEvents();
  }

  setup() {
    this.bp = 1364;
    this.scroll();
  }

  scroll() {
    //if (this.bp <= window.innerWidth) return;
    const st = $(window).scrollTop();
    const headerHeight = this.$ele.height();
    let isWhite = false;
    $(this.targetClass).each((i, e) => {
      const t = $(e).offset().top;
      const h = $(e).outerHeight();
      if (t - st < headerHeight && t + h - st > headerHeight) {
        isWhite = true;
      }
    });
    this.$ele.toggleClass("is-blue", isWhite);
  }

  setEvents() {
    super.setEvents();

    $(window).on("scroll", e => {
      this.scroll();
    });
  }
}
