class Menu {
  constructor(options) {
    this.$btn = options.elem.find('.js-menu__btn');
    this.$links = options.elem.find('.js-menu__item-link');
    this.index = options.index;
    this.init();
  }

  init() {
    const url = document.location.href;

    this.$links.each(function(index, element) {
      if (url === element.href) {
        $(element).addClass('menu__item-link_state_active');
      }
    });

    this.$btn.on(`click.btn${this.index}`, this._handleButtonClick.bind(this));
  }

  _handleButtonClick(event) {
    $(event.currentTarget).closest('.js-menu').toggleClass('menu_state_open');
  }
}

export default Menu;
