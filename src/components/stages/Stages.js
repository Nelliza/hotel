class Stages {
  constructor(options) {
    this.$stage = options.elem.children('li');
    this.index = options.index;
    this.current = options.elem.data('current');
    this.init();
  }

  init() {
    const countItems = this.$stage.length;

    for (let i = 0; i < countItems; i += 1) {
      if (i === countItems - 1) {
        this.$stage.eq(i).css('width', 0);
      } else {
        this.$stage.eq(i).css('width', `${(100 / (countItems - 1) - 1)}%`);
      }
    }

    this.$stage.on(`click.stage${this.index}`, this._handleStageClick.bind(this));

    if (this.current) {
      this.$stage.eq(this.current - 1).trigger('click');
    }
  }

  _handleStageClick(event) {
    this.$stage.removeClass('stages__item_state_current stages__item_state_done');
    $(event.currentTarget).addClass('stages__item_state_current');
    const currentIndex = $(event.currentTarget).index();

    for (let i = 0; i < currentIndex; i += 1) {
      this.$stage.eq(i).addClass('stages__item_state_done');
    }
  }
}

export default Stages;
