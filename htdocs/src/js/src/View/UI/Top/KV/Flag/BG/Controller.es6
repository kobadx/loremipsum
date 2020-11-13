export default class Controller {
  constructor() {
    this.setup();
  }

  setup() {
    this.obj = new THREE.Group();
    this.bp = 768;
    const w = $(".canvas").width();
    this.w = w;
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
        dashRatio: 0.99,
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
      // 色濃く
      tl.to(
        children.material,
        0.25,
        {
          opacity: 0.05,
          ease: Expo.easeIn,
        },
        0 * 0.02
      );
      // 色薄く
      tl.to(
        children.material,
        0.7,
        {
          opacity: 0.005,
          ease: Expo.easeOut,
        },
        0 * 0.02 + 0.25
      );
      // 伸びる
      tl.to(
        children.material.uniforms.dashOffset,
        2,
        {
          value: -2,
          ease: Expo.easeOut,
        },
        0 * 0.02 + 0.05
      );
    });
    return tl;
  }

  resize() {
    const w = $(".canvas").width();
    const l = this.bp >= w ? 55 : 140;
    const num = Math.ceil(w / l);
    const h = $(".canvas").height();
    this.moveLine(w, l, h);
    if (num > this.num) {
      for (let i = 0; i < num - this.num; i++) {
        const material = new MeshLineMaterial({
          color: new THREE.Color(0x9f9f9f),
          lineWidth: this.bp >= w ? 2 : 1,
          opacity: 0.005,
          transparent: true,
          dashOffset: -2,
          dashArray: 2 * h,
          dashRatio: 0.99,
        });
        const point = [];
        const _w = -w * 0.5;
        const index = this.num + i;
        point.push(_w + index * l, h * 0.5, -1);
        point.push(_w + index * l, -h * 0.5, -1);
        const line = new MeshLine();
        line.setGeometry(point);
        const mesh = new THREE.Mesh(line.geometry, material);
        this.obj.add(mesh);
      }
      this.num = num;
    }
  }

  moveLine(w, l, h) {
    const cl = this.obj.children.length;
    for (let i = 0; i < cl; i++) {
      const obj = this.obj.children[i];
      obj.geometry.dispose();
      const point = [];
      const _w = -w * 0.5;
      point.push(_w + i * l, h * 0.5, -1);
      point.push(_w + i * l, -h * 0.5, -1);
      const line = new MeshLine();
      line.setGeometry(point);
      obj.geometry = line.geometry;
      obj.material.lineWidth = this.bp >= w ? 2 : 1;
      // const geometry =
    }
  }

  update({ posi, depth }) {
    this.obj.position.z = posi - depth;
  }
}
