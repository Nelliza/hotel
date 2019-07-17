class Menu {
  constructor(options) {
    this.$btn = options.elem.find('.js-menu__btn');
    this.$link = options.elem.find('.js-menu-item__link');
    this.index = options.index;
    this.init();
  }

  init() {
    const url = document.location.href;

    for (let i = 0; i < this.$link.length; i += 1) {
      if (url === this.$link.get(i).href) {
        this.$link.eq(i).addClass('menu-item__link_state_active');
      }
    }

    this.$btn.on(`click.btn${this.index}`, this._handleButtonClick.bind(this));
  }

  _handleButtonClick(event) {
    $(event.currentTarget).closest('.js-menu').toggleClass('menu_state_open');
  }
}

export default Menu;
