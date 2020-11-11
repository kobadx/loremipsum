export default class Controller {
  constructor() {
    this.setup();
  }

  setup() {
    this.obj = new THREE.Group();
    this.bp = 768;
    const w = $(".canvas").width();
    const h = $(".canvas").height();
    //lごとに罫線
    const l = this.bp >= w ? 55 : 140;
    this.num = Math.ceil(w / l);
    this.obj.position.x = (w - this.num * l) * 0.5;
    this.obj.position.z = -2;
    // this.obj.position.;

    for (let i = 0; i < this.num; i++) {
      const material = new MeshLineMaterial({
        color: new THREE.Color(0x9f9f9f),
        lineWidth: this.bp >= w ? 2 : 1,
        opacity: 1,
        transparent: true,
        dashOffset: 0,
        dashArray: 2 * h,
        dashRatio: 0.99
      });
      const point = [];
      const _w = -w * 0.5;

      point.push(_w + i * l, h * 0.5, -1);
      point.push(_w + i * l, -h * 0.5, -1);
      const line = new MeshLine();
      line.setGeometry(point);
      const mesh = new THREE.Mesh(line.geometry, material);

      this.obj.add(mesh);
    }
  }

  show() {
    console.log("show");
    const tl = new TimelineMax();
    const h = $(".canvas").height();
    const num = this.obj.children.length * 0.5;
    this.obj.children.forEach((children, index) => {
      tl.to(
        children.material,
        0.25,
        {
          opacity: 0.05,
          ease: Expo.easeIn
        },
        Math.abs(index - num) * 0.02
      );
      tl.to(
        children.material,
        1,
        {
          opacity: 0.005,
          ease: Expo.easeOut
        },
        Math.abs(index - num) * 0.02 + 0.25
      );
      tl.to(
        children.material.uniforms.dashOffset,
        2,
        {
          value: -2,
          ease: Expo.easeOut
        },
        Math.abs(index - num) * 0.02 + 0.05
      );
    });
    return tl;
  }

  resize() {
    this.obj.children = [];
    this.setup();
    console.log(this.obj);
    this.obj.children.forEach(children => {
      children.material.opacity = 0.005;
      children.material.uniforms.dashOffset.value = -2;
    });
  }

  update({ posi, depth }) {
    this.obj.position.z = posi - depth;
  }
}
