export default class Controller {
  constructor() {
    this.setup();
  }

  setup() {
    this.obj = new THREE.Group();
    this.lightObj = new THREE.Group();
    this.bp = 768;
    const w = $(".canvas").width();
    const h = $(".canvas").height();
    //lごとに罫線
    const l = this.bp >= w ? 55 : 140;
    this.num = Math.ceil(w / l);
    this.obj.position.x = (w - this.num * l) * 0.5;
    this.obj.position.z = -2;
    this.lightObj.position.x = (w - this.num * l) * 0.5;
    this.lightObj.position.z = -2;
    // this.obj.position.;

    for (let i = 0; i < this.num; i++) {
      const mesh = this.getObj({
        index: i,
        width: w,
        height: h,
        length: l
      });
      const mesh2 = this.getObj({
        index: i,
        width: w,
        height: h,
        length: l
      });
      this.obj.add(mesh);
      this.lightObj.add(mesh2);
    }
  }

  getObj({ index, width, height, length }) {
    const material = new MeshLineMaterial({
      color: new THREE.Color(0x9f9f9f),
      lineWidth: this.bp >= width ? 2 : 1,
      opacity: 1,
      transparent: true,
      dashOffset: 0,
      dashArray: 2 * height,
      dashRatio: 0.99
    });
    const point = [];
    const _w = -width * 0.5;

    point.push(_w + index * length, height * 0.5, -1);
    point.push(_w + index * length, -height * 0.5, -1);
    const line = new MeshLine();
    line.setGeometry(point);
    const mesh = new THREE.Mesh(line.geometry, material);
    return mesh;
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
    tl.add(e => {
      this.timeline();
    });
    return tl;
  }

  timeline() {
    const l = this.lightObj.children.length;
    const index = Math.floor(Math.random() * l);
    const d = Math.random() * 2 + 3;
    const target = this.lightObj.children[index];
    const tl = new TimelineMax();
    console.log(target);
    tl
      //opacity
      .to(
        target.material,
        1.2,
        {
          opacity: 0.1,
          ease: Expo.easeOut
        },
        d
      );

    //線をひく
    tl.to(
      target.material.uniforms.dashOffset,
      0.75,
      {
        value: -2,
        ease: Expo.easeOut
      },
      d
    ).to(
      target.position,
      0.75,
      {
        y: -window.innerHeight * 1.1,
        ease: Expo.easeOut
      },
      d + 0.2
    );

    //loop
    tl.add(e => {
      target.material.uniforms.dashOffset.value = 0;
      target.material.opacity = 1;
      target.position.y = 0;
      this.timeline();
    }, "+= 1");
  }

  resize() {
    this.obj.children = [];
    this.lightObj.children = [];
    this.setup();

    this.obj.children.forEach(children => {
      children.material.opacity = 0.005;
      children.material.uniforms.dashOffset.value = -2;
    });
  }

  update({ posi, depth }) {
    this.obj.position.z = posi - depth;
  }
}
