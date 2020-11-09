export default class Controller {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.vx = x;
    this.vy = y;
    this.vz = z;
    this.defx = x;
    this.defy = y;
    this.defy2 = y;
    this.defz = z;

    this.cnt = 0;
  }

  setup() {}

  setEvents() {}
}
