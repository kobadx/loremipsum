//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "_MyLibs/Util/Base.es6";

export default class Controller extends Base {
  constructor(ele) {
    super();
    this.$ele = $(ele);
    this.setup();
    this.setEvents();

    // this.timeline();
  }

  setup() {}

  timeline() {}

  update() {}

  onResize() {}

  show() {
    const tl = new TimelineMax();
    tl

      //img
      .to(this.$ele.find("img"), 1.2, {
        scale: 1.05,
        ease: Expo.easeOut,
      })
      .to(
        this.$ele.find(".text"),
        0.8,
        {
          opacity: 0.5,
          ease: Expo.easeOut,
        },
        0
      );

    return tl;
  }

  hide(progress) {
    const tl = new TimelineMax();
    tl
      //img
      .to(this.$ele.find("img"), 1.2, {
        scale: 1,
        ease: Expo.easeOut,
      })
      .to(
        this.$ele.find(".text"),
        0.6,
        {
          opacity: 1,
          ease: Expo.easeOut,
        },
        0
      );
    return tl;
  }

  onEnter() {
    // console.log(this.tl);
    // this.tl.kill();
    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl.add(this.show());
  }

  onLeave() {
    const progress = this.tl.progress();
    this.tl.kill();
    this.tl = new TimelineMax();
    this.tl.add(this.hide(progress));
  }

  setEvents() {
    super.setEvents();

    this.$ele.on("mouseenter." + this.name, this.onEnter.bind(this));
    this.$ele.on("mouseleave." + this.name, this.onLeave.bind(this));
    this.$ele.on("touchstart." + this.name, this.onEnter.bind(this));
    this.$ele.on("touchend." + this.name, this.onLeave.bind(this));
  }
}
