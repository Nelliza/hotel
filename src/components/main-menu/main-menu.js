class MainMenu {
  constructor(menu) {
    this.$btn = menu.find('.main-menu__btn');
    this.$link = menu.find('.main-menu__link');
    this.init();
  }

  init() {
    let url = document.location.href;

    for (let i = 0; i < this.$link.length; i += 1) {
      if (url === this.$link.get(i).href) {
        this.$link.eq(i).addClass('main-menu__link--active');
      }
    }

    this.$btn.on('click', this._handleButtonClick.bind(this));
  }

  _handleButtonClick(event) {
    $(event.currentTarget).closest('.main-menu').toggleClass('main-menu--open');
  }
}

export default MainMenu;