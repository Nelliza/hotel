class Callback {
  constructor(options) {
    this.$callback = options.$element;
    this.$overlay = options.overlay;
    this.index = options.index;
    this.init();
  }

  init() {
    this.$callback.on(`click.callback${this.index}`, this._handleCallbackClick.bind(this));
    this.$overlay.on(`click.overlay${this.index}`, this._handleCallbackClick.bind(this));
  }

  _handleCallbackClick() {
    $('.js-callback__messaging').toggleClass('callback__messaging_state_visible');
    $('.js-callback__overlay').toggleClass('callback__overlay_state_visible');
  }
}

export default Callback;
