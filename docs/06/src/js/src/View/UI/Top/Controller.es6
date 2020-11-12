//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "_MyLibs/Util/Base.es6";

import Hover from "./Hover/Controller.es6";

import Tab from "./Tab/Controller.es6";
import HoverText from "./HoverText/Controller.es6";
import Menu from "./Menu/Controller.es6";
import Parallax from "./Parallax/Controller.es6";
import HoverImg from "./HoverImg/Controller.es6";

import ScrollBtn from "./ScrollBtn/Controller.es6";

import KV from "./KV/Controller.es6";

import Cookie from "./Cookie/Controller.es6";

export default class Controller extends Base {
  constructor() {
    super();

    this.setup();
    this.setEvents();
    this.onResize();

    // this.timeline();
  }

  setup() {
    $(".btn-primary").each((i, e) => {
      new Hover(e);
    });

    new Tab($(".tabWrap"));

    $(".footer-link").each((i, e) => {
      new HoverText(e);
    });
    $(".menu-lang-link").each((i, e) => {
      new HoverText(e);
    });

    this.menu = new Menu({
      $btn: $(".header-menu-btn"),
      $contents: $(".menu")
    });

    // parallax box
    $(".parallax,.parallax2,.parallax3").each((i, e) => {
      new Parallax($(e), {
        ease: e.dataset.ease - 0,
        max: e.dataset.max - 0
      });
    });
    // parallax img
    $(".parallaxImg").each((i, e) => {
      var val = 0.06 + (Math.random() - 0.5) * 0.1;
      var max = 200 + (Math.random() - 0.5) * 100;
      $(e).attr("data-ease", val);

      new Parallax($(e), {
        ease: e.dataset.ease - 0,
        max: e.dataset.max - 0
      });
    });

    $(".HoverImg").each((i, e) => {
      new HoverImg(e);
    });

    this.scrollBtn = new ScrollBtn($(".scroll-btn"));
    super.onU();

    this.kv = new KV();

    this.cookie = new Cookie();

    this.show();
  }

  show() {
    this.kv
      .timeline(e => {
        this.scrollBtn.show();
        return this.menu.showBtn();
      })
      .then(e => {
        this.cookie.show();
      });
  }

  timeline() {}

  update() {
    window.updates.map(update => {
      update.cb();
    });
  }

  onResize() {
    console.log("resize");

    document.body.style.setProperty("--h", window.innerHeight + "px");
  }

  setEvents() {
    super.setEvents();

    $(window).on("resize", this.onResize.bind(this));
  }
}
