import Base from "../Base/Controller.es6";
import Setup from "./setup/Controller.es6";
import Stick from "./Stick/Controller.es6";
export default class Controller extends Base {
  constructor() {
    super();
  }

  init() {
    this.name = "UIController";
    this.setup = new Setup($(".canvas"));
    const posi = [
      {
        x: 300 - window.innerWidth * 0.5,
        y: window.innerHeight * 0.5 - 100
      },
      {
        x: 100 - window.innerWidth * 0.5,
        y: 100 - window.innerHeight * 0.5
      }
    ];
    this.stick = new Stick(posi, 10);

    this.setup.scene.add(this.stick.obj);
  }

  setEvent() {
    super.__setUpdateFlag(true);
  }

  reset() {}

  update() {
    this.stick.update();
    this.setup.render();
  }
}
