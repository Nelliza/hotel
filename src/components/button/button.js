class Button {
  constructor(button) {
    this.$button = button;
    this.init();
  }

  init() {
    this.$button.on('click', this._handleButtonClick.bind(this));
  }

  _handleButtonClick(event) {
    let $div = $('<div>'),
        btnOffset = $(event.currentTarget).offset(),
        xPos = event.pageX - btnOffset.left,
        yPos = event.pageY - btnOffset.top;

    $(event.currentTarget).addClass('button--pressed');
    $div.addClass('button__ripple');

    $div.css({
          top: yPos,
          left: xPos
        })
        .appendTo($(event.currentTarget));

    window.setTimeout(() => {
      $div.remove();
      this.$button.removeClass('button--pressed');
    }, 1000);

    let anchor = $(event.currentTarget).attr('href');

    if (anchor) {
      $('html').animate({ 
        scrollTop: $(anchor).offset().top
      }, 1000);
    }
  }
}

export default Button;