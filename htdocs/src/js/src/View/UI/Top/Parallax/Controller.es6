//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "_MyLibs/Util/Base.es6";

const MathUtils = {
  map: (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c,
  lerp: (a, b, n) => (1 - n) * a + n * b,
};
export default class Controller extends Base {
  constructor($ele, { ease, max }) {
    super();

    this.isUEv = true;

    this.$ele = $ele;
    this.ease = ease;
    this.max = max;

    this.$ele.get(0).style.setProperty("--max", max + "px");

    this.target = this.$ele.find(".parallax-inner").get(0);

    this.setup();
    this.setEvents();
  }

  setup() {
    this.renderedStyles = {
      previous: 0,
      current: 0,
      ease: this.ease,
      maxValue: 4,
      setValue: () => {
        const maxValue = this.max;
        const minValue = -1 * maxValue;
        return Math.max(
          Math.min(
            MathUtils.map(
              this.props.top - this.st,
              window.innerHeight,
              -1 * this.props.height,
              minValue,
              maxValue
            ),
            maxValue
          ),
          minValue
        );
      },
    };
    this.reset();
  }

  scroll() {
    this.st = $(window).scrollTop();
  }

  getSize() {
    this.props = {
      height: this.$ele.outerHeight(),
      top: this.$ele.offset().top - this.st,
    };
    this.renderedStyles.current = this.renderedStyles.previous = this.renderedStyles.setValue();
  }

  reset() {
    this.scroll();
    this.getSize();
  }

  update() {
    // this.getSize();
    this.renderedStyles.current = this.renderedStyles.setValue();
    this.renderedStyles.previous = MathUtils.lerp(
      this.renderedStyles.previous,
      this.renderedStyles.current,
      this.renderedStyles.ease
    );

    this.target.style.transform = `translate3d(0, ${-this.renderedStyles
      .previous}px, 0)`;
  }

  setEvents() {
    super.setEvents();

    $(window).on("scroll", (e) => {
      this.scroll();
    });
  }
}
