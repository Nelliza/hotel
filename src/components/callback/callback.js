class Callback {
  constructor(options) {
    this.$callback = options.elem;
    this.$overlay = options.overlay;
    this.index = options.index;
    this.init();
  }

  init() {
    this.$callback.on(`click.callback${this.index}`, this._handleCallbackClick.bind(this));
    this.$overlay.on(`click.overlay${this.index}`, this._handleOverlayClick.bind(this));
  }

  _handleCallbackClick(event) {
    $(event.currentTarget).next('.js-messaging').toggleClass('messaging--visible');
  }

  _handleOverlayClick(event) {
    $(event.currentTarget).prev('.js-messaging').toggleClass('messaging--visible');
  }
}

export default Callback;
