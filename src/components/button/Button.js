class Button {
  constructor(options) {
    this.$button = options.elem;
    this.index = options.index;
    this.init();
  }

  init() {
    this.$button.on(`click.button${this.index}`, this._handleButtonClick.bind(this));
  }

  _handleButtonClick(event) {
    const $div = $('<div>');
    const btnOffset = $(event.currentTarget).offset();
    const xPos = event.pageX - btnOffset.left;
    const yPos = event.pageY - btnOffset.top;

    $(event.currentTarget).addClass('button_state_pressed');
    $div.addClass('button__ripple');

    $div.css({
      top: yPos,
      left: xPos,
    })
      .appendTo($(event.currentTarget));

    window.setTimeout(() => {
      $div.remove();
      this.$button.removeClass('button_state_pressed');
    }, 1000);

    const anchor = $(event.currentTarget).attr('href');

    if (anchor) {
      $('html').animate({
        scrollTop: $(anchor).offset().top,
      }, 1000);
    }
  }
}

export default Button;
