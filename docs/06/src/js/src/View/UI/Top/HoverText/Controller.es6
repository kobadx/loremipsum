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
    this.l = this.$ele.find("svg").width();
    this.scale = 1.5;
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
    tl.to(this.$ele.find(".bar"), 0.5, {
      startAt: {
        "transform-origin": "0 0",
        x: this.$ele.find(".bar").width() * -1.1
      },
      x: 0,
      ease: Expo.easeOut
    });
    return tl;
  }

  hide(progress) {
    const tl = new TimelineMax();
    tl.to(this.$ele.find(".bar"), 0.5, {
      x: this.$ele.find(".bar").width() * 1.1,
      startAt: {
        "transform-origin": "100% 0"
      },
      ease: Expo.easeOut
    });
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
