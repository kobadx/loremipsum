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

    tl
      // bg
      .to(
        this.$contents.find(".bg"),
        0.8,
        {
          opacity: 1,
          x: 0,
          z: 1,
          startAt: {
            x: 200,
            opacity: 0
          },
          ease: Expo.easeOut
        },
        0.0
      )

      // bg line
      .add(() => {
        this.$contents.find(".bg span").each((i, e) => {
          tl
            // color 濃く
            .to(
              e,
              0.2,
              {
                "background-color": "rgb(200,200,200)",
                ease: Expo.easeOut
              },
              i * 0.05
            )
            // color 薄く
            .to(
              e,
              0.5,
              {
                "background-color": "rgb(243,243,243)",
                ease: Expo.easeOut
              },
              i * 0.05 + 0.2
            )
            // 線伸ばす
            .to(
              e,
              0.75,
              {
                scaleY: 1,
                startAt: {
                  scaleY: 0
                },
                ease: Expo.easeOut
              },
              i * 0.05
            );
        });
      }, 0.0)

      // item
      .add(() => {
        this.$contents.find(".menu-item").each((i, e) => {
          TweenMax.to(e, 0.7, {
            x: 0,
            opacity: 1,
            ease: Expo.easeOut,
            z: 1,
            startAt: {
              x: 20
            },
            delay: i * 0.045
          });
        });
      }, 0.3)

      // lang item
      .add(() => {
        this.$contents.find(".menu-lang-item").each((i, e) => {
          TweenMax.to(e, 1.0, {
            x: 0,
            opacity: 1,
            ease: Expo.easeOut,
            z: 1,
            startAt: {
              x: 10
            },
            delay: i * 0.06
          });
        });
      }, 0.3 + 0.2)

      // search
      .add(() => {
        TweenMax.to(this.$contents.find(".menu-search"), 1.0, {
          opacity: 1,
          x: 0,
          ease: Expo.easeOut,
          startAt: {
            x: 10
          }
        });
      }, 0.3 + 0.4);

    tl.add(btnshow(), 0.7); // ?
    return tl;
  }

  hide(btnhide = e => {}) {
    const tl = new TimelineMax();

    // item
    this.$contents.find(".menu-item").each((i, e) => {
      TweenMax.to(e, 0.7, {
        x: 0,
        opacity: 0,
        ease: Expo.easeOut,
        delay: i * 0.01
      });
    });

    // lang item
    this.$contents.find(".menu-lang-item").each((i, e) => {
      TweenMax.to(e, 0.7, {
        x: 0,
        opacity: 0,
        ease: Expo.easeOut,
        delay: i * 0.02
      });
    });

    tl
      // search
      .to(
        this.$contents.find(".menu-search"),
        0.7,
        {
          opacity: 0,
          x: 0,
          ease: Expo.easeOut
        },
        0.0
      );

    // bg line
    // this.$contents.find(".bg span").each((i, e) => {
    //   const index = this.$contents.find(".bg span").length - i - 1;
    //   tl
    //     // color 濃く
    //     .to(
    //       e,
    //       0.2,
    //       {
    //         "background-color": "rgb(200,200,200)",
    //         ease: Expo.easeOut,
    //       },
    //       index * 0.05
    //     );
    //   tl
    //     // color 薄く
    //     .to(
    //       e,
    //       0.5,
    //       {
    //         "background-color": "rgb(243,243,243)",
    //         ease: Expo.easeOut,
    //       },
    //       index * 0.05 + 0.2
    //     );
    //   tl
    //     // 線伸ばす
    //     .to(
    //       e,
    //       0.75,
    //       {
    //         scaleY: 0,
    //         ease: Expo.easeOut,
    //       },
    //       index * 0.05
    //     );
    // });

    tl
      // bg
      .to(
        this.$contents.find(".bg"),
        0.4,
        {
          opacity: 0,
          x: 100,
          z: 1,
          ease: Power2.easeIn,
          onComplete: () => {
            this.$contents.css({
              display: "none"
            });
          }
        },
        0.0
      );

    tl.add(btnhide(), 0); // ?
    return tl;
  }
}
