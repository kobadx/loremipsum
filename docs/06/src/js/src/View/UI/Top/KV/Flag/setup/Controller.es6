import Base from "../../Base/Controller.es6";
import RGBShift from "./RGBShift/Controller.es6";
export default class ClassName extends Base {
  constructor($dom, obj, scene) {
    super();
    this.$dom = $dom;
    this.obj = obj;
    this.objScene = scene;
    // this.is_autoRender = is_autoRender;
    this.initScene();
    this.initCamera();
    this.initRender();
    this.initComposer();

    this.render();
  }

  init() {
    this.frame = 0;
  }
  setEvent() {
    super.__setUpdateFlag(false);
  }
  update() {}

  initScene() {
    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color(0xff0000);
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.$dom.width() / this.$dom.height(),
      1,
      20000
    );
    this.setCameraByPixel();
  }

  setCameraByPixel(isRisize = false) {
    this.w = this.$dom.width();
    this.h = this.$dom.height();
    var fov = 45;
    var vFOV = fov * (Math.PI / 180);
    var vpHeight = this.h;
    var z = vpHeight / (2 * Math.tan(vFOV / 2));
    this.defz = z * 1;
    this.z = isRisize ? z : z * 0.27;
    this.camera.position.set(0, 0, this.z);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    // this.camera.aspect = this.w / this.h;
    this.camera.aspect = this.w / this.h;
    this.camera.updateProjectionMatrix();
  }

  initRender() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    const v = {
      画面の明るさ: 1.3
    };

    // this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.toneMappingExposure = Math.pow(v["画面の明るさ"], 4.0);
    this._dat = dat.addFolder("glow");
    // console.log(Math.pow(v.p, 4.0));
    this._dat.add(v, "画面の明るさ", 0.1, 2).onChange(e => {
      this.renderer.toneMappingExposure = Math.pow(e, 4.0);
      // console.log(Math.pow(e, 4.0));
    });

    this.renderer.toneMapping = THREE.ReinhardToneMapping;
    // this.renderer.context.enable(
    //   this.renderer.context.SAMPLE_ALPHA_TO_COVERAGE
    // );
    this.$dom.append(this.renderer.domElement);
  }

  initComposer() {
    // console.log(THREE.EffectComposer);
    this.rgbshift = new RGBShift();
    this.composer = new THREE.EffectComposer(this.renderer);
    const renderPass = new THREE.RenderPass(this.objScene, this.camera);
    this.composer.addPass(renderPass);
    const param = {
      しきい値: 0.139,
      // 対象の明るさ: 1.9,
      // グローの半径: 0.36,
      対象の明るさ: 2,
      グローの半径: 0.3
    };
    this.effectBloom = new THREE.UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.01,
      1.07,
      0.85,
      this.obj,
      this.scene,
      this.camera
    );
    this.effectBloom.threshold = param["しきい値"];
    this.effectBloom.strength = param["対象の明るさ"];
    this.effectBloom.radius = param["グローの半径"];
    this._dat.add(param, "しきい値", 0, 1).onChange(e => {
      this.effectBloom.threshold = e;
    });
    this._dat.add(param, "対象の明るさ", 0, 3).onChange(e => {
      this.effectBloom.strength = e;
    });
    this._dat.add(param, "グローの半径", 0, 1).onChange(e => {
      this.effectBloom.radius = e;
    });
    this.composer.addPass(this.effectBloom);
    this.composer.addPass(this.rgbshift.shaderPass);

    const toScreen = new THREE.ShaderPass(THREE.CopyShader);
    toScreen.renderToScreen = true;
    this.composer.addPass(toScreen);
    this.onWindowResize(true);
  }

  onWindowResize(isInit) {
    const w = this.$dom.width();
    const h = this.$dom.height();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
    this.composer.setPixelRatio(window.devicePixelRatio);
    this.setCameraByPixel(!isInit);
  }

  render() {
    // this.renderer.render(this.objScene, this.camera);

    if (this.frame % 10 == 0) this.composer.render();

    if (this.is_autoRender) {
      requestAnimationFrame(this.render.bind(this));
    }

    this.frame++;
  }
}
