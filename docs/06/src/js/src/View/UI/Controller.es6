//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "_MyLibs/Util/Base.es6";
import * as m from "Util/Math/index.es6";

import Top from "./Top/Controller.es6";

export default class Controller extends Base {
  constructor() {
    super();

    // this.setup()
    this.setEvents();

    // this.timeline();
  }

  setup() {
    if ($("#top").length) this.top = new Top();
  }

  timeline() {}

  update() {}

  onResize() {}

  setEvents() {
    super.setEvents();
  }
}
