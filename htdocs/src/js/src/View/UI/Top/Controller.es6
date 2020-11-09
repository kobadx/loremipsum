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

export default class Controller extends Base {
  constructor() {
    super();

    this.setup();
    this.setEvents();

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

    new Menu({
      $btn: $(".header-menu-btn"),
      $contents: $(".menu")
    });

    new Parallax($(".parallax"));
  }

  timeline() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
