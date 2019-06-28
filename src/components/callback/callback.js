class Callback {
  constructor(options) {
    this.$callback = options.callback;
    this.$overlay = options.overlay;
    this.init();
  }

  init() {
    this.$callback.on('click', this._handleCallbackClick.bind(this));
    this.$overlay.on('click', this._handleOverlayClick.bind(this));
  }

  _handleCallbackClick(event) {
    $(event.currentTarget).next('.messaging').toggleClass('messaging--visible');
  }

  _handleOverlayClick(event) {
    $(event.currentTarget).prev('.messaging').toggleClass('messaging--visible');
  }
}

export default Callback;