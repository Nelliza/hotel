class ChartAnimation {
  constructor(options) {
    this.$chart = options.$element;
    this.index = options.index;
    this.className = options.className;
    this.init();
  }

  init() {
    $(window).on(`scroll.window${this.index}`, this._handleWindowScroll.bind(this));
  }

  _handleWindowScroll() {
    if (this._isScrolledIntoView(this.$chart)) {
      this.$chart.addClass(`${this.className}_state_animated`);
    }
  }

  _isScrolledIntoView($element) {
    const TopViewPort = $(window).scrollTop();
    const BottomViewPort = TopViewPort + $(window).height();
    const TopOfElement = $element.offset().top;
    const BottomOfElement = TopOfElement + $element.height();
    return ((BottomOfElement <= BottomViewPort) && (TopOfElement >= TopViewPort));
  }
}

export default ChartAnimation;
