export default class Controller {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.vx = x;
    this.vy = y;
    this.vz = z;
    this.px = x;
    this.py = y;
    this.pz = z;

    this.cnt = 0;
  }

  setup() {}

  setEvents() {}
}
