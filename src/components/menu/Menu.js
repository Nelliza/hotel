class Menu {
  constructor(options) {
    this.index = options.index;
    this.init(options.$element);
  }

  init($element) {
    const $button = $element.find('.js-menu__button');
    const $links = $element.find('.js-menu__item-link');
    const url = document.location.href;

    $links.each((index, item) => {
      if (url === item.href) {
        $(item).addClass('menu__item-link_state_active');
      }
    });

    $button.on(`click.button${this.index}`, this._handleButtonClick.bind(this));
  }

  _handleButtonClick(event) {
    $(event.currentTarget).closest('.js-menu').toggleClass('menu_state_open');
  }
}

export default Menu;
