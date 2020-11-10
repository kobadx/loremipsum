export default class Controller {
  constructor() {
    this.setup();
  }

  setup() {
    this.obj = new THREE.Group();

    const w = $(".canvas").width();
    const h = $(".canvas").height();
    //140ごとに罫線
    this.num = Math.ceil(w / 140);
    this.obj.position.x = (w - this.num * 140) * 0.5;
    this.obj.position.z = -2;
    // this.obj.position.;

    for (let i = 0; i < this.num; i++) {
      const material = new MeshLineMaterial({
        color: new THREE.Color(0x9f9f9f),
        lineWidth: 1,
        opacity: 0.05,
        transparent: true,
        dashOffset: 0,
        dashArray: 2 * h,
        dashRatio: 0.99
      });
      const point = [];
      const _w = -w * 0.5;

      point.push(_w + i * 140, h * 0.5, -1);
      point.push(_w + i * 140, -h * 0.5, -1);

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
        1,
        {
          opacity: 0.005,
          ease: Expo.easeOut
        },
        Math.abs(index - num) * 0.02
      );
      tl.to(
        children.material.uniforms.dashOffset,
        2,
        {
          value: -2,
          ease: Expo.easeOut
        },
        Math.abs(index - num) * 0.02
      );
    });
    return tl;
  }

  update({ posi, depth }) {
    this.obj.position.z = posi - depth;
  }
}
