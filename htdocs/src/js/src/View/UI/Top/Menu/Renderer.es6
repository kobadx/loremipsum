//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "_MyLibs/Util/Base.es6";

export default class Controller {
  constructor($contents) {
    this.$contents = $contents;
  }

  setup() {}

  show(btnshow = e => {}) {
    const tl = new TimelineMax();
    this.$contents.css({
      display: "block"
    });
    tl.to(
      this.$contents.find(".bg"),
      0.25,
      {
        opacity: 1,
        ease: Expo.easeOut
      },
      0
    );
    this.$contents.find(".bg span").each((i, e) => {
      tl.to(
        e,
        0.2,
        {
          "background-color": "rgb(200,200,200)",
          ease: Expo.easeOut
        },
        i * 0.05
      );
      tl.to(
        e,
        0.5,
        {
          "background-color": "rgb(243,243,243)",
          ease: Expo.easeOut
        },
        i * 0.05 + 0.2
      );
      tl.to(
        e,
        0.75,
        {
          scaleY: 1,
          ease: Expo.easeOut
        },
        i * 0.05
      );
    });
    this.$contents.find(".menu-item").each((i, e) => {
      tl.to(
        e,
        1,
        {
          x: 0,
          opacity: 1,
          ease: Expo.easeOut,
          startAt: {
            x: 10
          }
        },
        i * 0.05
      );
    });
    this.$contents.find(".menu-lang-item").each((i, e) => {
      tl.to(
        e,
        1,
        {
          x: 0,
          opacity: 1,
          ease: Expo.easeOut,
          startAt: {
            x: 10
          }
        },
        i * 0.1 + 0.5
      );
    });
    tl.to(
      this.$contents.find(".menu-search"),
      1,
      {
        opacity: 1,
        x: 0,
        ease: Expo.easeOut,
        startAt: {
          x: 10
        }
      },
      0.6
    );
    tl.add(btnshow(), 0.7);
    return tl;
  }

  hide(btnhide = e => {}) {
    const tl = new TimelineMax();

    this.$contents.find(".menu-item").each((i, e) => {
      tl.to(
        e,
        1,
        {
          x: -10,
          opacity: 0,
          ease: Expo.easeOut
        },
        i * 0.05
      );
    });
    this.$contents.find(".menu-lang-item").each((i, e) => {
      tl.to(
        e,
        1,
        {
          x: -10,
          opacity: 0,
          ease: Expo.easeOut
        },
        i * 0.1
      );
    });
    tl.to(
      this.$contents.find(".menu-search"),
      1,
      {
        opacity: 0,
        ease: Expo.easeOut,
        x: -10
      },
      0
    );
    tl.add(btnhide(), 0);
    this.$contents.find(".bg span").each((i, e) => {
      tl.to(
        e,
        0.2,
        {
          "background-color": "rgb(200,200,200)",
          ease: Expo.easeOut
        },
        i * 0.05
      );
      tl.to(
        e,
        0.5,
        {
          "background-color": "rgb(243,243,243)",
          ease: Expo.easeOut
        },
        i * 0.05 + 0.2
      );
      tl.to(
        e,
        0.75,
        {
          scaleY: 0,
          ease: Expo.easeOut
        },
        i * 0.05
      );
    });
    tl.to(
      this.$contents.find(".bg"),
      0.25,
      {
        opacity: 0,
        ease: Expo.easeOut,
        onComplete: () => {
          this.$contents.css({
            display: "none"
          });
        }
      },
      1
    );
    return tl;
  }
}
