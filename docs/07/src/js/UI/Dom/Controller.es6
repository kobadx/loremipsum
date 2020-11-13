import Base from "../Base/Controller.es6";
import gsap from "gsap";
export default class Controller extends Base {
  constructor() {
    super();
  }

  init() {
    this.name = "DomController";
  }

  show(menuBtnShow = e => {}) {
    const header = $(".header");
    const $inner = $(".index-kv-inner.def");
    const $innerLine = $(".index-kv-inner.line");
    const logo = $(".header-logo");
    const menuBtn = $(".header-menu-btn");
    const $lead = $inner.find(".index-kv-lead");
    const $tit = $inner.find(".index-kv-title");
    const $leadL = $innerLine.find(".index-kv-lead");
    const $titL = $innerLine.find(".index-kv-title");
    const tl = gsap.timeline();

    // ready
    TweenMax.set($tit, { x: 100 });
    TweenMax.set($titL, { x: 100 });
    TweenMax.set($lead, { x: 20 });
    TweenMax.set($leadL, { x: 20 });

    tl
      // $tit show
      .to(
        $tit,
        0.01,
        {
          opacity: 1,
          ease: "expo.out"
        },
        0.0
      )
      // $tit x
      .to(
        $tit,
        0.9,
        {
          x: 0,
          ease: "expo.out"
        },
        0.0
      )

      // $titL show
      .to(
        $titL,
        0.01,
        {
          opacity: 1,
          ease: "expo.out"
        },
        0.0
      )
      // $titL x
      .to(
        $titL,
        0.9,
        {
          x: 0,
          ease: "expo.out"
        },
        0.05
      )

      // $lead x
      .to(
        $lead,
        1.5,
        {
          x: 0,
          opacity: 1,
          ease: "expo.out"
        },
        0.2
      )

      // logo
      .to(
        logo,
        1,
        {
          opacity: 1,
          ease: "expo.out"
        },
        1.5
      )
      // btn
      .to(
        menuBtn,
        1,
        {
          opacity: 1,
          ease: "expo.out",
          onStart() {
            menuBtnShow();
          }
        },
        1.5
      );
  }

  setEvent() {
    super.__setUpdateFlag(false);
  }

  reset() {}
}
