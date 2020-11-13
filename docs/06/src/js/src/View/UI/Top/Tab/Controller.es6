//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "_MyLibs/Util/Base.es6";
// import gsap from ''
import Hover from "./Hover/Controller.es6";
export default class Controller extends Base {
  constructor($ele) {
    super();

    this.$ele = $ele;
    this.color = {
      activeBtnbg: "#fff",
      activeBtnColor: "#2e2f30",
      nonActiveBtnBg: "#000ba3",
      nonActiveBtnColor: "#fff"
    };
    this.setup();
    this.setEvents();
  }

  setup() {
    this.onResize();

    this.$ele.find(".tabbtn.is-active .base_bg").css({
      "background-color": this.color.activeBtnbg
    });
    this.$ele.find(".tabbtn.is-active span").css({
      color: this.color.activeBtnColor
    });

    this.$ele.find(".tabContents.is-active .tabContentsItem").css({
      opacity: 1,
      transform: "translateY(0px)"
    });

    this.$ele.find(".tabbtn").each((i, e) => {
      new Hover(e);
    });
  }

  onResize() {
    const h = this.$ele.find(".tabContents.is-active").outerHeight(true);

    $(".index-solution-contents-inner").height(h);
  }

  changeContents({ $prevContents, $prevBtn, $nextContents, $nextBtn }) {
    $prevContents.removeClass("is-active");
    $prevBtn.removeClass("is-active");
    $nextContents.addClass("is-active");
    $nextBtn.addClass("is-active");
    if (this.tl) this.tl.kill();
    this.killTL();
    this.tl = new TimelineMax();
    this.tl
      //hide
      .add(this.hide($prevContents, $prevBtn))
      .add(this.showBtn($nextBtn), 0)
      //show
      .add(this.show($nextContents, $nextBtn));
  }

  killTL() {
    TweenMax.killTweensOf($(".tabContentsItem"));
    TweenMax.killTweensOf($(".tabBtn span"));
  }

  show($contents, $btn) {
    const tl = new TimelineMax();

    //contents
    $contents.find(".tabContentsItem").each((i, item) => {
      tl.to(
        item,
        0.5,
        {
          opacity: 1,
          y: 0,
          ease: Expo.easeOut,
          startAt: {
            y: 10
          }
        },
        i * 0.03
      );
    });

    return tl;
  }

  showBtn($btn) {
    const tl = new TimelineMax();
    tl
      //btn
      .to($btn.find(".base_bg"), 0.5, {
        "background-color": this.color.activeBtnbg,

        ease: Expo.easeOut
      })
      .to(
        $btn.find("span"),
        0.5,
        {
          color: this.color.activeBtnColor,
          ease: Expo.easeOut
        },
        0
      );
    return tl;
  }

  hideBtn($btn) {
    const tl = new TimelineMax();
    tl
      //btn
      .to($btn.find(".base_bg"), 0.5, {
        "background-color": this.color.nonActiveBtnBg,

        ease: Expo.easeOut
      })
      .to(
        $btn.find("span"),
        0.5,
        {
          color: this.color.nonActiveBtnColor
        },
        0
      );
    return tl;
  }

  hide($contents, $btn) {
    const tl = new TimelineMax();
    tl.add(this.hideBtn($btn));
    //contents
    $contents.find(".tabContentsItem").each((i, item) => {
      tl.to(
        item,
        0.5,
        {
          opacity: 0,
          y: -10,
          ease: Expo.easeOut
        },
        i * 0.03
      );
    });

    return tl;
  }

  setEvents() {
    super.setEvents();

    this.$ele.find(".tabbtn").on("click", e => {
      const $target = $(e.currentTarget);
      if ($target.hasClass("is-active")) return;

      const index = $target.index();
      const $prevBtn = this.$ele.find(".tabbtn.is-active");
      const $prevContents = this.$ele.find(".tabContents.is-active");
      this.changeContents({
        $prevContents: $prevContents,
        $prevBtn: $prevBtn,
        $nextBtn: $target,
        $nextContents: this.$ele.find(".tabContents").eq(index)
      });
    });

    $(window).on("resize", this.onResize.bind(this));
  }
}
