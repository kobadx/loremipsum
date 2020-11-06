import gsap from "gsap";
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
    console.log((w - this.num * 140) * 0.5, "m");
    // this.obj.position.;

    const material = new MeshLineMaterial({
      color: new THREE.Color(0x9f9f9f),
      lineWidth: 1,
      opacity: 0,
      transparent: true
    });

    for (let i = 0; i < this.num; i++) {
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
    const tl = gsap.timeline();
    this.obj.children.forEach((children, index) => {
      tl.to(children.material, 1, {
        opacity: 0.1,
        ease: "expo.out"
      });
    });
    return tl;
  }
}
