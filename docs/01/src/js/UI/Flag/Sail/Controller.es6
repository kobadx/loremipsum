export default class Controller {
  constructor(posi, num) {
    this.posi = posi;
    this.LENGTH = window.innerWidth * 0.6;
    this.obj = new THREE.Group();
    this.width = 10;
    this.NUM = this.verticalLength / this.width;
    this.setup();
  }

  setup() {
    for (let i = 0; i < this.NUM; i++) {
      const points = [];
      const p = {
        x: this.getVector(i).x + this.posi[0].x + 10,
        y: this.getVector(i).y + this.posi[0].y
      };
      points.push(p.x, p.y, 0);
      points.push(p.x + this.LENGTH + 10, p.y, 0);
      const line = new MeshLine();
      line.setGeometry(points);
      const geometry = line.geometry;
      const material = new MeshLineMaterial({
        transparent: true,
        lineWidth: 1,
        color: new THREE.Color("#ffffff")
      });
      this.obj.add(new THREE.Mesh(geometry, material));
    }
  }

  getVector(index) {
    const v = new THREE.Vector3(
      this.posi[0].x - this.posi[1].x,
      this.posi[0].y - this.posi[1].y,
      0
    ).normalize();

    return v.multiplyScalar(-index * this.width);
  }

  get verticalLength() {
    return (
      new THREE.Vector3(
        this.posi[0].x - this.posi[1].x,
        this.posi[0].y - this.posi[1].y,
        0
      ).length() * 0.7
    );
  }

  update() {}
}
