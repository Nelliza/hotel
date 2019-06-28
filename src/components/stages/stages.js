class Stages {
  constructor(options) {
    this.$stage = options.stages.children('li');
    this.current = options.current;
    this.init();
  }

  init() {
    let countItems = this.$stage.length;

    for (let i = 0; i < countItems; i += 1) {
      if (i === countItems - 1) {
        this.$stage.eq(i).css('width', 0);
      }
      else {
        this.$stage.eq(i).css('width', (100 / (countItems - 1) - 1) + '%');
      }
    }

    this.$stage.on('click', this._handleStageClick.bind(this));

    if (this.current) {
      this.$stage.eq(this.current - 1).trigger('click');
    }
  }

  _handleStageClick(event) {
    this.$stage.removeClass('stages__item--current stages__item--done');
    $(event.currentTarget).addClass('stages__item--current');
    let currentIndex = $(event.currentTarget).index();

    for (let i = 0; i < currentIndex; i += 1) {
      this.$stage.eq(i).addClass('stages__item--done');
    }
  }
}

export default Stages;