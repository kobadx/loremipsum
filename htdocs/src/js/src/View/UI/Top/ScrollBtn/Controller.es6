//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "_MyLibs/Util/Base.es6";

export default class Controller extends Base {
  constructor($ele) {
    super();
    this.$ele = $ele;
    this.setup();
    this.setEvents();

    // this.timeline();
  }

  setup() {}

  timeline() {
    const tl = new TimelineMax();
    const h = this.$ele.find(".bar").height() * 1.1;
    tl.to(this.$ele.find(".bar"), 1.75, {
      y: h,
      ease: Expo.easeOut
    })
      .set(this.$ele.find(".bar"), {
        y: -h
      })
      .add(e => {
        this.timeline();
      });
  }

  show() {
    const tl = new TimelineMax();
    const h = this.$ele.find(".bar").height() * 1.1;
    tl.to(this.$ele.find(".bar"), 1.75, {
      y: h,
      ease: Expo.easeOut
    })
      .to(
        this.$ele.find(".bar2"),
        1.75,
        {
          y: 0,
          ease: Expo.easeOut
        },
        0.1
      )
      .set(this.$ele.find(".bar"), {
        y: -h
      })
      .add(e => {
        this.timeline();
      });
    return tl;
  }

  update() {}

  onResize() {}

  scroll() {
    const st = { top: $(window).scrollTop() };
    const top = $(".section.index-about").offset().top;
    TweenMax.to(st, 0.75, {
      top: top - 130,
      ease: Expo.easeOut,
      onUpdate() {
        $(window).scrollTop(st.top);
      }
    });
  }

  setEvents() {
    super.setEvents();

    this.$ele.on("click", e => {
      this.scroll();
    });
  }
}
