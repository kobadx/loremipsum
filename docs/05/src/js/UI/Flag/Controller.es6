import Base from "../Base/Controller.es6";
import Setup from "./setup/Controller.es6";
import Stick from "./Stick/Controller.es6";
import Sail from "./Sail/Controller.es6";
import BG from "./BG/Controller.es6";
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
    window.dat = new dat.GUI({
      closed: true
    });
    // dat.GUI.toggleHide();
    this.$canvas = $(".canvas");

    this.speed = 0.1;

    // layout
    const posi = [
      new THREE.Vector3(
        -window.innerWidth * 0.5 + 100,
        this.$canvas.height() * 0.5,
        0
      ),
      new THREE.Vector3(
        -window.innerWidth * 0.5 - 25,
        this.$canvas.height() * 0.5 - 800,
        0
      )
    ];

    // objects
    this.bg = new BG();
    this.stick = new Stick(posi, 10);
    this.sail = new Sail(posi, 10);

    this.obj = new THREE.Group();

    this.obj.add(this.stick.obj);
    this.obj.add(this.sail.obj);

    // layout
    this.obj.position.x = window.innerWidth * 0.5 - 585;
    this.obj.position.y = -window.innerHeight * 0.5 + 375;
    // this.obj.position.z = -1000

    // add scene
    const scene = new THREE.Scene();
    scene.add(this.bg.obj);
    scene.add(this.obj);
    scene.background = new THREE.Color(0x00076d);
    this.setup = new Setup(this.$canvas, this.obj, scene);
    // this.setup.scene.add();

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
    const interaction = window.dat.addFolder("interaction");
    this.mouseMove = true;
    interaction.add(this, "mouseMove");

    $(window).on("mousemove", e => {
      // if (this.mouseMove) {
      //   this.mousePosi.x = e.pageX;
      //   this.mousePosi.y = e.pageY;
      // } else {
      //   this.mousePosi.x = 0;
      //   this.mousePosi.y = 0;
      // }
    });
  }

  reset() {}

  show() {
    this.sail.show();
    this.stick.show();
    // this.bg.show();
  }

  update() {
    // update
    this.stick.update();
    this.sail.update();
    this.setup.render();

    // マウス インタラクション
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
