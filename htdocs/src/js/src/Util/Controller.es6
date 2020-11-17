//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import JudgeEnvironment from "_MyLibs/Util/JudgeEnvironment.es6";
import Profiler from "_MyLibs/Util/Profiler.es6";

export default class Controller {
  constructor() {
    this.setup();
    this.setEvents();
  }

  setup() {
    // page id
    gb.pageID = $("body").attr("id");

    // デバイス確認
    gb.je = new JudgeEnvironment();

    if (gb.conf.Profiler) new Profiler(); // Profiler
  }

  setEvents() {}
}
