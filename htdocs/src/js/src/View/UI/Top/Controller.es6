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

import Header from "./Header/Controller.es6";
const UAParser = require("ua-parser-js");

export default class Controller extends Base {
  constructor() {
    super();
    this.w = window.innerWidth;
    this.isUEv = true;
    this.result = UAParser();
    this.setup();
    this.setEvents();
    this.onResize();

    // this.timeline();

    // Swiper
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 2,
      freeMode: true,
      slidesOffsetAfter: window.innerWidth-$('.swiper-wrapper').width(),
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  setup() {
    // hover btn
    // $(".btn-primary").each((i, e) => {
    //   new Hover(e);
    // });
    // hover footer
    $(".footer-link").each((i, e) => {
      new HoverText(e);
    });
    // hover menu lang
    $(".menu-lang-link").each((i, e) => {
      new HoverText(e);
    });
    $(".HoverImg").each((i, e) => {
      new HoverImg(e);
    });

    //whitebgクラスがついてる要素がheaderとかぶったら、色を変える
    new Header($(".header"), ".whitebg");

    // tab
    new Tab($(".tabWrap"));

    // menu
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
      var val = 0.05 + (Math.random() - 0.5) * 0.07;
      var max = 200 + (Math.random() - 0.5) * 100;
      $(e).attr("data-ease", val);

      new Parallax($(e), {
        ease: e.dataset.ease - 0,
        max: e.dataset.max - 0
      });
    });

    // scroll 示唆
    this.scrollBtn = new ScrollBtn($(".scroll-btn"));

    // KV
    this.kv = new KV();

    // cookie
    this.cookie = new Cookie();

    // opening
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

  onResize(e) {
    if (!e) {
      document.body.style.setProperty("--h", window.innerHeight + "px");
    } else {
      if (
        this.result.device.type != "mobile" &&
        this.result.device.type != "tablet" &&
        this.w == window.innerWidth
      ) {
        document.body.style.setProperty("--h", window.innerHeight + "px");
        this.w = window.innerWidth;
      }
    }
  }

  setEvents() {
    super.setEvents();

    // $(window).on("resize", this.onResize.bind(this));
    $(window).on("resize", $.debounce(200, this.onResize.bind(this)));
  }
}
