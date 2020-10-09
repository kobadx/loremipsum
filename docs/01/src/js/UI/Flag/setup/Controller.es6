import Base from "../../Base/Controller.es6";
export default class ClassName extends Base {
  constructor($dom, is_autoRender) {
    super();
    this.$dom = $dom;
    this.is_autoRender = is_autoRender;
    this.initScene();
    this.initCamera();
    this.initRender();
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
    this.onWindowResize(true);
    this.$dom.append(this.renderer.domElement);
  }

  onWindowResize() {
    const w = this.$dom.width();
    const h = this.$dom.height();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(w, h);
    this.setCameraByPixel();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
    if (this.is_autoRender) {
      requestAnimationFrame(this.render.bind(this));
    }
  }
}
