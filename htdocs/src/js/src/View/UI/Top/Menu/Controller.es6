//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "_MyLibs/Util/Base.es6";

import HoverArrow from "./HoverArrow/Controller.es6";
import CloseBtn from "./CloseBtn/Controller.es6";
import OpenBtn from "./OpenBtn/Controller.es6";
import Renderer from "./Renderer.es6";

export default class Controller extends Base {
  constructor({ $btn, $contents }) {
    super();
    this.$btn = $btn;
    this.$contents = $contents;

    this.isLock = false;

    this.setup();
    this.setEvents();
  }

  setup() {
    this.setBG();
    this.$contents.find(".menu-item").each((i, e) => {
      new HoverArrow(e, i);
    });

    this.closeBtn = new CloseBtn(this.$contents.find(".menu-close"));
    this.openBtn = new OpenBtn($(".header-menu-btn"));

    this.renderer = new Renderer(this.$contents);
  }

  setBG() {
    const isSp = window.innerWidth <= 768;
    const w = isSp ? window.innerWidth : 572;
    const length = isSp ? 55 : 140;
    const l = Math.ceil(w / length) + 1;
    const m = (w - (l - 1) * length) * 0.5 + length;
    for (var i = 0; i < l; i++) {
      const span = $("<span></span>");
      span.css({
        left: i * length + m
      });
      this.$contents.find(".bg").append(span);
    }
  }

  timeline() {}

  update() {}

  show() {
    const tl = new TimelineMax();
    this.isShow = true;
    tl
      //show
      .add(
        this.renderer.show(e => {
          this.$contents.addClass("is-active");
          return this.closeBtn.show();
        })
      )
      .add(() => {
        this.isLock = false;
      }, 1.0);
  }

  showBtn() {
    return this.openBtn.show();
  }

  hide() {
    const tl = new TimelineMax();
    this.$contents.removeClass("is-active");
    this.isShow = false;
    tl

      //hide
      .add(
        this.renderer.hide(e => {
          return this.closeBtn.hide();
        })
      )
      .add(() => {
        this.isLock = false;
      }, 1.0);
  }

  onResize() {
    this.$contents.find(".bg span").remove();
    this.setBG();
    if (this.isShow) {
      TweenMax.set(this.$contents.find(".bg span"), {
        scaleY: 1,
        "background-color": "rgb(243,243,243)"
      });
    }
    console.log("resize");
  }

  setEvents() {
    super.setEvents();

    this.$btn.on("click", e => {
      if (this.isLock) return;
      this.isLock = true;
      this.show();
    });
    this.$contents.find(".menu-close").on("click", e => {
      if (this.isLock) return;
      this.isLock = true;
      this.hide();
    });
    this.$contents.find(".overlay").on("click", e => {
      if (this.isLock) return;
      this.hide();
    });

    $(window).on("resize", $.debounce(200, this.onResize.bind(this)));
  }
}
