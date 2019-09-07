class Button {
  constructor(options) {
    this.$button = options.$element;
    this.index = options.index;
    this.init();
  }

  init() {
    this.$button.on(`click.button${this.index}`, this._handleButtonClick.bind(this));
  }

  _handleButtonClick(event) {
    const $ripple = $('<div>', {
      class: 'button__ripple',
    });
    const buttonOffset = $(event.currentTarget).offset();
    const xPosition = event.pageX - buttonOffset.left;
    const yPosition = event.pageY - buttonOffset.top;

    $(event.currentTarget).addClass('button_state_pressed');

    $ripple.css({
      top: yPosition,
      left: xPosition,
    })
      .appendTo($(event.currentTarget));

    window.setTimeout(() => {
      $ripple.remove();
      this.$button.removeClass('button_state_pressed');
    }, 1000);

    const anchor = $(event.currentTarget).attr('href');

    if (anchor) {
      $('html').animate({
        scrollTop: $(`.${anchor.substr(1)}`).offset().top,
      }, 1000);
    }
  }
}

export default Button;
