import Base from "./Base/Controller.es6";
import Flag from "./Flag/Controller.es6";
import Dom from "./Dom/Controller.es6";
import Menu from "./Menu/Controller.es6";
export default class Controller extends Base {
  constructor() {
    super();
  }

  init() {
    this.name = "UIController";
    this.flag = new Flag();
    this.dom = new Dom();
    this.menu = new Menu({
      $btn: $(".header-menu-btn"),
      $contents: $(".menu")
    });
    this.timeline();
  }

  timeline() {
    var tl = new TimelineMax({ delay: 0.0 });

    tl
      // ------------------------------------------------------------
      // canvas
      // ------------------------------------------------------------
      // draw line
      // 広がる
      //   y,z
      .add(() => {
        this.flag.show();
      }, 1.0)

      // effectを強める
      .add(() => {
        TweenMax.to(this.flag.setup.effectBloom, 3.0, {
          strength: 5,
          ease: Power2.easeInOut
        });
        // TweenMax.to(this.flag.setup.effectBloom, 1.5, {
        //   radius: 3,
        //   ease: Power2.easeInOut,
        // });
      }, 1.0)

      // カメラひくとき → zでゆっくり、パパっと一気に移動 → infocusで書いてる
      //   rgb, blur, zigzag, gunya, glitch(テレビ線など)→ kddi
      //     1frame強めの → this.frameか？
      //     3frame弱めでrandomなのを2、3回？

      //   composerに入れる → soyフォルダに書いてるか？
      .add(() => {
        // camera
        var tl = new TimelineMax();

        tl
          // ゆっくり引く
          .to(
            this.flag.setup.camera.position,
            2.0,
            {
              z: this.flag.setup.defz,
              ease: Expo.easeInOut,
              onStart: () => {
                TweenMax.to(this.flag.setup.effectBloom, 4.0, {
                  strength: 2,
                  ease: Power2.easeInOut
                });
              }
            },
            0.0
          )
          // 再度ゆっくり
          .to(
            this.flag.setup.camera.position,
            4.5,
            {
              z: this.flag.setup.defz * 1,
              ease: Expo.easeOut
            },
            0.8 + 0.05
          );
      }, 2.0)
      // ------------------------------------------------------------
      // dom
      // ------------------------------------------------------------
      .add(() => {
        this.dom.show(e => this.menu.showBtn());
      }, 2.0 + 0.9);
  }

  setEvent() {
    super.__setUpdateFlag(false);
  }

  reset() {}
}
