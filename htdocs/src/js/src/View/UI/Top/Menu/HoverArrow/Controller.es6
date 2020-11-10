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

  setup() {
    TweenMax.set(this.$ele.find("polyline"), {
      drawSVG: 0
    });
  }

  timeline() {}

  update() {}

  onResize() {}

  show() {
    const tl = new TimelineMax();
    const offset = 66;
    tl
      //show svg
      .fromTo(
        this.$ele.find("polyline"),
        0.75,
        {
          drawSVG: "100% 100%"
        },
        {
          drawSVG: "0% 100%",
          ease: Expo.easeOut
        }
      )
      //x
      .to(
        this.$ele.find("p"),
        0.75,
        {
          x: this.$ele.find("svg").width() + 20,
          ease: Expo.easeOut
        },
        0
      );

    return tl;
  }

  hide(progress) {
    const tl = new TimelineMax();
    const offset = 66;
    const t = 0.75 - 0.75 * progress;
    tl
      //progress x

      //hide svg
      .to(
        this.$ele.find("polyline"),
        0.75,

        {
          drawSVG: "100% 100%",
          ease: Expo.easeOut
        },
        0
      )
      //x
      .to(
        this.$ele.find("p"),
        0.75,
        {
          x: 0,
          ease: Expo.easeOut
        },
        0.1
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
