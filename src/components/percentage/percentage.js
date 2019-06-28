class ChartAnimation {
  constructor(options) {
    this.$chart = options.chart;
    this.className = options.className;
    this.init();
  }

  init() {
    $(window).on('scroll', this._handleWindowScroll.bind(this));
  }

  _handleWindowScroll() {
    if (this._isScrolledIntoView(this.$chart) === true) {
      this.$chart.addClass(`${this.className}--animated`);
    }
  }

  _isScrolledIntoView(elem) {
    let TopViewPort = $(window).scrollTop();
    let BottomViewPort = TopViewPort + $(window).height();
    let TopOfElement = $(elem).offset().top;
    let BottomOfElement = TopOfElement + $(elem).height();
    return ((BottomOfElement <= BottomViewPort) && (TopOfElement >= TopViewPort));
  }
}

export default ChartAnimation;