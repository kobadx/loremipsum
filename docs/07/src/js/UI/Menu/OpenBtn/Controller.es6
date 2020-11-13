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

  setup() {}

  timeline() {}

  update() {}

  onResize() {}

  show() {
    const tl = new TimelineMax();
    const $line = this.$ele.find(".header-menu-btn-line");
    // tl.to(
    //   ".header-menu-btn",
    //   1,
    //   {
    //     y: 0,
    //     ease: Expo.easeOut
    //   },
    //   0
    // );
    $line.each((i, e) => {
      tl.to(
        e,
        0.5,
        {
          scaleX: 1,
          ease: Expo.easeOut
        },
        i * 0.1
      );
    });
    tl.to(
      this.$ele.find(".header-menu-btn-text"),
      1,
      {
        x: 0,
        opacity: 1,
        ease: Expo.easeOut,
        startAt: {
          x: 10
        }
      },
      0
    );
    return tl;
  }

  showHover() {
    const tl = new TimelineMax();
    const $line = this.$ele.find(".header-menu-btn-line");
    $line.each((i, e) => {
      tl.to(
        e,
        0.5,
        {
          scaleX: 0,
          ease: Expo.easeOut,
          startAt: {
            "transform-origin": "0 0"
          }
        },
        i * 0.1
      );
    });
    $line.each((i, e) => {
      tl.to(
        e,
        0.5,
        {
          scaleX: 1,
          ease: Expo.easeOut,
          startAt: {
            "transform-origin": "100% 0"
          }
        },
        i * 0.1 + 0.5
      );
    });
    return tl;
  }

  onEnter() {
    // console.log(this.tl);
    // this.tl.kill();
    if (this.tl) this.tl.kill();
    this.tl = new TimelineMax();

    this.tl.add(this.showHover());
  }

  setEvents() {
    this.$ele.on("mouseenter." + this.name, this.onEnter.bind(this));

    this.$ele.on("touchstart." + this.name, this.onEnter.bind(this));
  }
}
