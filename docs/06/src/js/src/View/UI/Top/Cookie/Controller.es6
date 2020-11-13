export default class Controller {
  constructor() {
    this.setEvents();
  }

  show() {
    const tl = new TimelineMax();
    tl.to(".cookie", 0.5, {
      opacity: 1,
      ease: Expo.easeOut
    });
  }

  hide() {
    const tl = new TimelineMax();
    tl.to(".cookie", 0.5, {
      opacity: 0,
      ease: Expo.easeOut,
      onComplete() {
        $(".cookie").remove();
      }
    });
  }

  setEvents() {
    $(".cookie .btn").on("click", e => {
      this.hide();
      return false;
    });
  }
}
