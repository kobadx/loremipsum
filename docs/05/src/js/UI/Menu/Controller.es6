//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "../Base/Base.es6";

import HoverArrow from "./HoverArrow/Controller.es6";
import CloseBtn from "./CloseBtn/Controller.es6";
import OpenBtn from "./OpenBtn/Controller.es6";
import Renderer from "./Renderer.es6";

export default class Controller extends Base {
  constructor({ $btn, $contents }) {
    super();
    this.$btn = $btn;
    this.$contents = $contents;
    this.setup();
    this.setEvents();
  }

  setup() {
    this.setBG();
    this.$contents.find(".menu-item").each((i, e) => {
      new HoverArrow(e);
    });

    this.closeBtn = new CloseBtn(this.$contents.find(".menu-close"));
    this.openBtn = new OpenBtn($(".header-menu-btn"));

    this.renderer = new Renderer(this.$contents);
  }

  setBG() {
    const isSp = window.innerWidth <= 768;
    console.log(isSp);
    const w = isSp ? window.innerWidth : window.innerWidth * 0.828;
    const length = isSp ? 54 : 140;
    const l = Math.ceil(w / length) + 1;
    // const m = (w - (l - 1) * length) * 0.5;
    for (var i = 0; i < l; i++) {
      const span = $("<span></span>");
      span.css({
        left: i * length
      });
      this.$contents.find(".bg").append(span);
    }
  }

  timeline() {}

  update() {}

  show() {
    const tl = new TimelineMax();
    tl
      //show
      .add(
        this.renderer.show(e => {
          this.$contents.addClass("is-active");
          return this.closeBtn.show();
        })
      );
  }

  showBtn() {
    return this.openBtn.show();
  }

  hide() {
    const tl = new TimelineMax();
    this.$contents.removeClass("is-active");
    tl

      //hide
      .add(
        this.renderer.hide(e => {
          return this.closeBtn.hide();
        })
      );
  }

  onResize() {
    this.$contents.find(".bg span").remove();
    this.setBG();
  }

  setEvents() {
    super.setEvents();

    this.$btn.on("click", e => {
      this.show();
    });
    this.$contents.find(".menu-close").on("click", e => {
      this.hide();
    });
  }
}
