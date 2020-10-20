import Base from "../../Base/Controller.es6";
export default class ClassName extends Base {
  constructor($dom, is_autoRender) {
    super();
    this.$dom = $dom;
    this.is_autoRender = is_autoRender;
    this.initScene();
    this.initCamera();
    this.initRender();
    this.initComposer();
    this.onWindowResize();
    this.render();
  }

  init() {}
  setEvent() {
    super.__setUpdateFlag(false);
  }
  update() {}

  initScene() {
    this.scene = new THREE.Scene();
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

  setCameraByPixel() {
    this.w = this.$dom.width();
    this.h = this.$dom.height();
    var fov = 45;
    var vFOV = fov * (Math.PI / 180);
    var vpHeight = this.h;
    var z = vpHeight / (2 * Math.tan(vFOV / 2));
    this.z = z;
    this.camera.position.set(0, 0, z);
    this.camera.lookAt(new THREE.Vector3());

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
      exposure: 1
    };
    this.renderer.toneMappingExposure = v.p;
    window.dat.add(v, "exposure", 0.1, 2).onChange(e => {
      this.renderer.toneMappingExposure = Math.pow(e, 4.0);
    });
    // this.onWindowResize(true);
    this.renderer.toneMapping = THREE.ReinhardToneMapping;
    this.$dom.append(this.renderer.domElement);
  }

  initComposer() {
    this.composer = new THREE.EffectComposer(this.renderer);
    const renderPass = new THREE.RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);
    const param = {
      Threshold: 0.1,
      Strength: 0.4,
      Radius: 0.85
    };
    const effectBloom = new THREE.UnrealBloomPass(
      new THREE.Vector2(
        window.innerWidth * window.devicePixelRatio,
        window.innerHeight * window.devicePixelRatio
      ),
      0.1,
      0.4,
      0.85
    );
    window.dat.add(param, "Threshold", 0, 1).onChange(e => {
      effectBloom.threshold = e;
    });
    window.dat.add(param, "Strength", 0, 3).onChange(e => {
      effectBloom.strength = e;
    });
    window.dat.add(param, "Radius", 0, 1).onChange(e => {
      effectBloom.radius = e;
    });
    // this.composer.addPass(effectBloom);
    const toScreen = new THREE.ShaderPass(THREE.CopyShader);
    toScreen.renderToScreen = true;
    this.composer.addPass(toScreen);
  }

  onWindowResize() {
    const w = this.$dom.width();
    const h = this.$dom.height();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(w, h);
    // this.composer.setSize(w, h);
    this.setCameraByPixel();
  }

  render() {
    // this.renderer.render(this.scene, this.camera);
    this.composer.render();
    if (this.is_autoRender) {
      requestAnimationFrame(this.render.bind(this));
    }
  }
}
