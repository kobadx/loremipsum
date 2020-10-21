export default class Controller {
  constructor(posi, r) {
    this.posi = posi;
    this.r = r;
    this.obj = new THREE.Group();
    this.color = 0x0047e9;
    this.setup();
  }

  setup() {
    //line
    for (let i = 0; i < 2; i++) {
      const line = this.line;
      line.position.x = this.r * i;
      this.obj.add(line);
    }
    // console.log(this.curve);
    //curve
    const curve = this.curve;
    curve.position.y = this.posi[0].y;
    curve.position.x = this.posi[0].x;
    this.obj.add(curve);
  }

  get line() {
    const points = [];
    for (var i = 0; i < 2; i++) {
      // const
      points.push(this.posi[i].x, this.posi[i].y, 0);
    }
    // const line = new MeshLine();
    // line.setGeometry(points);
    const geometry = new THREE.BufferGeometry();
    geometry.addAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(points), 3)
    );
    // const geometry = line.geometry;
    const material = new THREE.LineBasicMaterial({ color: this.color });
    return new THREE.Line(geometry, material);
  }

  get curve() {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(6, 3, 0),
      new THREE.Vector3(this.r, 0, 0)
    );
    const arr = curve.getPoints(50);
    const points = [];
    for (var i = 0; i < arr.length; i++) {
      points.push(arr[i].x, arr[i].y, arr[i].z);
    }

    // const line = new MeshLine();
    // line.setGeometry(points);
    // const geometry = line.geometry;
    const geometry = new THREE.BufferGeometry();
    geometry.addAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(points), 3)
    );
    // const material = new MeshLineMaterial({
    //   transparent: true,
    //   lineWidth: 1,
    //   color: new THREE.Color(this.color)
    // });
    const material = new THREE.LineBasicMaterial({ color: this.color });
    return new THREE.Line(geometry, material);
  }

  update() {}
}
