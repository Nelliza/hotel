class Menu {
  constructor(options) {
    this.index = options.index;
    this.init(options.elem);
  }

  init(elem) {
    const $button = elem.find('.js-menu__button');
    const $links = elem.find('.js-menu__item-link');

    const url = document.location.href;

    $links.each(function(index, element) {
      if (url === element.href) {
        $(element).addClass('menu__item-link_state_active');
      }
    });

    $button.on(`click.button${this.index}`, this._handleButtonClick.bind(this));
  }

  _handleButtonClick(event) {
    $(event.currentTarget).closest('.js-menu').toggleClass('menu_state_open');
  }
}

export default Menu;
