//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

export default class Controller {
  constructor(ele) {
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
    this.tlShow = new TimelineMax();
    this.tlShow
      //show svg
      .fromTo(
        this.$ele.find("polyline"),
        0.9,
        {
          drawSVG: "100% 100%"
        },
        {
          drawSVG: "0% 100%",
          ease: Expo.easeOut
        },
        0.0
      )
      //x
      .to(
        this.$ele.find("p"),
        0.7,
        {
          x: this.$ele.find("svg").width() + 10,
          z: 1,
          ease: Expo.easeOut
        },
        0.0
      );
  }

  hide(progress) {
    this.tlHide = new TimelineMax();
    this.tlHide
      //hide svg
      .to(
        this.$ele.find("polyline"),
        0.6,

        {
          drawSVG: "100% 100%",
          ease: Expo.easeOut
        },
        0.0
      )
      //x
      .to(
        this.$ele.find("p"),
        0.75,
        {
          x: 0,
          z: 1,
          ease: Expo.easeOut
        },
        0.0
      );
  }

  onEnter() {
    if (this.tlHide) this.tlHide.kill();
    this.show();
  }

  onLeave() {
    if (this.tlShow) this.tlShow.kill();
    this.hide();
  }

  setEvents() {
    this.$ele.on("mouseenter." + this.name, this.onEnter.bind(this));
    this.$ele.on("mouseleave." + this.name, this.onLeave.bind(this));
    this.$ele.on("touchstart." + this.name, this.onEnter.bind(this));
    this.$ele.on("touchend." + this.name, this.onLeave.bind(this));
  }
}
