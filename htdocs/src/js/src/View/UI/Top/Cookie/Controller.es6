import Cookies from "js-cookie";
export default class Controller {
  constructor() {
    this.setup();
    this.setEvents();
  }

  setup() {
    const isCookies = Cookies.get("isAllowCookie");
    if (typeof isCookies === "undefined") {
      //cookieがセットされてない
      this.isCookieShow = true;
    } else {
      this.isCookieShow = false;
    }
  }

  show() {
    if (!this.isCookieShow) {
      $(".cookie").remove();
      return;
    }
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
      // this.hide();
      if (e.currentTarget.classList.contains("btn-primary")) {
        //同意
        Cookies.set("isAllowCookie", "1", { expires: 31 });
      } else {
        //非同意
        Cookies.set("isAllowCookie", "0", { expires: 31 });
      }

      this.hide();
      return false;
    });
  }
}
