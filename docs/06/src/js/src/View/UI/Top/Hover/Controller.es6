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
    this.name = "HoverClass";

    this.setup();
    this.setEvents();
  }

  setup() {}

  update() {}

  draw() {}

  show() {
    const tl = new TimelineMax();
    tl.to(this.$ele.find(".bg"), 0.5, {
      scaleX: 1,
      ease: Expo.easeOut,
      startAt: {
        "transform-origin": "0 0"
      }
    });
    return tl;
  }

  hide(progress) {
    const tl = new TimelineMax();

    const t = (0.5 - 0.5 * progress) * 0.5;
    tl
      //途中で終わったscaleを最後までやる
      .to(this.$ele.find(".bg"), t, {
        scaleX: 1,
        ease: Expo.easeOut,
        startAt: {
          "transform-origin": "0 0"
        }
      })
      .to(
        this.$ele.find(".bg"),
        0.5,
        {
          scaleX: 0,
          ease: Expo.easeOut,
          startAt: {
            "transform-origin": "100% 0"
          }
        },
        t
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
    this.$ele.on("mouseenter." + this.name, this.onEnter.bind(this));
    this.$ele.on("mouseleave." + this.name, this.onLeave.bind(this));
    this.$ele.on("touchstart." + this.name, this.onEnter.bind(this));
    this.$ele.on("touchend." + this.name, this.onLeave.bind(this));
  }

  removeEvents() {
    this.$ele.off("mouseenter." + this.name);
    this.$ele.off("mouseleave." + this.name);
    this.$ele.off("touchstart." + this.name);
    this.$ele.off("touchend." + this.name);
  }

  destroy() {
    this.removeEvents();
  }
}
