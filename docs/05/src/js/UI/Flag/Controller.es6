import Base from "../Base/Controller.es6";
import Setup from "./setup/Controller.es6";
import Stick from "./Stick/Controller.es6";
import Sail from "./Sail/Controller.es6";
import * as dat from "dat.gui";
const MathUtils = {
  map: (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c,
  lerp: (a, b, n) => (1 - n) * a + n * b,
  clamp: (val, min, max) => Math.max(Math.min(val, max), min)
};
export default class Controller extends Base {
  constructor() {
    super();
  }

  init() {
    this.name = "UIController";
    window.dat = new dat.GUI();
    this.$canvas = $(".canvas");
    this.setup = new Setup(this.$canvas);

    this.speed = 0.1;
    const posi = [
      {
        x: -window.innerWidth * 0.5 + 230 - 54,
        y: this.$canvas.height() * 0.5
      },
      {
        x: -window.innerWidth * 0.5,
        y: this.$canvas.height() * 0.5 - 775
      }
    ];
    this.stick = new Stick(posi, 10);
    this.sail = new Sail(posi, 10);

    this.obj = new THREE.Group();
    this.obj.add(this.stick.obj);
    this.obj.add(this.sail.obj);

    this.obj.position.x = window.innerWidth * 0.5 - 585;
    this.obj.position.y = -173;
    // this.setup.scene.add();
    this.setup.scene.add(this.obj);

    this.mousePosi = {
      x: 0,
      y: 0
    };
    this.prevMosePosi = {
      x: 0,
      y: 0
    };
    // this.update();
  }

  setEvent() {
    super.__setUpdateFlag(true);
    $(window).on("resize", e => {
      this.setup.onWindowResize();
      // this.obj.position.y = window.innerHeight * 0.5;
    });

    $(window).on("mousemove", e => {
      this.mousePosi.x = e.pageX;
      this.mousePosi.y = e.pageY;
    });
  }

  reset() {}

  update() {
    this.stick.update();
    this.sail.update();
    this.setup.render();

    this.prevMosePosi = {
      x:
        Math.floor(
          MathUtils.lerp(this.prevMosePosi.x, this.mousePosi.x, this.speed) *
            100
        ) / 100,
      y:
        Math.floor(
          MathUtils.lerp(this.prevMosePosi.y, this.mousePosi.y, this.speed) *
            100
        ) / 100
    };
    this.obj.rotation.y =
      ((this.prevMosePosi.x - window.innerWidth * 0.5) / window.innerWidth) *
      0.3;
    this.obj.rotation.x =
      ((this.prevMosePosi.y - window.innerHeight * 0.5) / window.innerHeight) *
      0.3;
  }
}
