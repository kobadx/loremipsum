import Base from "../Base/Controller.es6";
import Setup from "./setup/Controller.es6";
import Stick from "./Stick/Controller.es6";
import Sail from "./Sail/Controller.es6";
import BG from "./BG/Controller.es6";
import * as dat from "dat.gui";
const MathUtils = {
  map: (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c,
  lerp: (a, b, n) => (1 - n) * a + n * b,
  clamp: (val, min, max) => Math.max(Math.min(val, max), min),
};
export default class Controller extends Base {
  constructor() {
    super();
  }

  init() {
    this.name = "UIController";
    window.dat = new dat.GUI();
    this.$canvas = $(".canvas");
    this.bp = 768;
    this.per = this.$canvas.width() / 1280;
    if (this.per > 1) this.per = 1;

    this.mouseMove = true;

    this.speed = 0.015;

    this.disY = 0;
    this.dis = 0;
    this.defY = 0;
    this.tar = 0;
    this.st = 0;
    this.tarSt = 0;

    this.$f = $(".footer");

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
      ),
    ];

    // objects
    this.bg = new BG();
    this.stick = new Stick(posi, 10);
    this.sail = new Sail(posi, 10);

    this.wrap = new THREE.Group();
    this.obj = new THREE.Group();

    this.obj.add(this.stick.obj);
    this.obj.add(this.sail.obj);

    // layout
    this.defY = 0;
    this.obj.position.x = window.innerWidth * 0.5 - 540;
    this.obj.position.y = this.defY;

    if (this.$canvas.width() <= this.bp) {
      this.obj.position.x = window.innerWidth * 0.5 - 300;
      this.obj.scale.set(this.per + 0.05, this.per + 0.05, this.per + 0.05);
    }
    // this.obj.position.z = -1000

    // add scene
    const scene = new THREE.Scene();
    scene.add(this.bg.obj);
    this.wrap.add(this.obj);
    scene.add(this.wrap);
    scene.background = new THREE.Color(0x00076d);
    this.setup = new Setup(this.$canvas, this.obj, scene);
    // this.setup.scene.add();

    this.mousePosi = {
      x: 0,
      y: 0,
    };
    this.prevMosePosi = {
      x: 0,
      y: 0,
    };
    // this.update();

    this.frame = 0;
  }

  reset() {}

  show() {
    this.sail.show();
    this.stick.show();
    // this.bg.show();

    // move Y
    // positionを正しい位置に
    var tarY = this.$canvas.width() <= this.bp ? 318 : 375;
    TweenMax.to(this, 1.5, {
      defY: -window.innerHeight * 0.5 + tarY,
      ease: Power2.easeInOut,
      delay: 2.0,
    });

    // TweenMax.to(this.obj.position, 1.5, {
    //   y: -window.innerHeight * 0.5 + 375,
    //   ease: Power2.easeInOut,
    //   delay: 2.0,
    // });
  }

  update() {
    this.frame++;
    if (this.frame % 1 == 0) {
      // update
      this.bg.update({
        posi: this.setup.camera.position.z,
        depth: this.setup.defz,
      });
      this.stick.update();
      this.sail.update();

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
          ) / 100,
      };
      this.obj.rotation.y =
        ((this.prevMosePosi.x - window.innerWidth * 0.5) / window.innerWidth) *
        0.15;
      this.obj.rotation.x =
        ((this.prevMosePosi.y - window.innerHeight * 0.7) /
          window.innerHeight) *
        0.15;

      // return;
    }

    this.setup.render();

    // 一番下にいったときにfooterまでいかないように
    // this.dis += (this.disY - this.dis) * 0.05;
    // this.obj.position.y = this.defY - this.dis;
    this.tar += (this.defY - this.tar) * 0.12;
    this.obj.position.y = this.tar;

    this.tarSt += (this.st - this.tarSt) * 0.6;
    this.wrap.position.y = this.tarSt;
  }

  setEvent() {
    super.__setUpdateFlag(true);

    // resize
    $(window).on("resize", (e) => {
      this.setup.onWindowResize();
      this.bg.resize();
      if (this.$canvas.width() <= this.bp) {
        const per = this.$canvas.width() / 1280;
        this.obj.scale.set(per + 0.05, per + 0.05, per + 0.05);
        this.obj.position.x = window.innerWidth * 0.5 - 300;
      } else {
        this.obj.scale.set(1, 1, 1);
        this.obj.position.x = window.innerWidth * 0.5 - 585;
      }
    });

    // マウスの揺れ
    $(window).on("mousemove", (e) => {
      if (this.mouseMove) {
        this.mousePosi.x = e.clientX;
        this.mousePosi.y = e.clientY;
      } else {
        this.mousePosi.x = 0;
        this.mousePosi.y = 0;
      }
    });

    // // 一番下にいったときにfooterまでいかないように
    // $(window).on("scroll", (e) => {
    //   const st = $(window).scrollTop();

    //   const ftop = this.$f.offset().top - window.innerHeight;

    //   var dis = ftop - st;
    //   if (dis > 0) this.disY = 0;
    //   else this.disY = dis - 100;
    // });
    $(window).on("scroll", (e) => {
      var st = $(window).scrollTop();
      this.st = st;
      var ftop = this.$f.offset().top - window.innerHeight;
      if (st > ftop - 150) st = ftop - 150;

      this.defY = -st + -window.innerHeight * 0.5 + 375;
    });
  }
}
