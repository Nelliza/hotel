class Stages {
  constructor(options) {
    this.index = options.index;
    this.init(options.$element);
  }

  init($element) {
    this.$stages = $element.children('li');
    const current = $element.data('current');
    const countStages = this.$stages.length;

    this.$stages.each((index, item) => {
      if (index === countStages - 1) {
        $(item).css('width', 0);
      } else {
        $(item).css('width', `${(100 / (countStages - 1) - 1)}%`);
      }
    });

    this.$stages.on(`click.stage${this.index}`, this._handleStageClick.bind(this));

    if (current) {
      this.$stages.eq(current - 1).trigger('click');
    }
  }

  _handleStageClick(event) {
    this.$stages.removeClass('stages__item_state_current stages__item_state_done');
    $(event.currentTarget).addClass('stages__item_state_current');
    const currentIndex = $(event.currentTarget).index();

    this.$stages.each((index, item) => {
      if (index === currentIndex) {
        return false;
      }

      $(item).addClass('stages__item_state_done');
    });
  }
}

export default Stages;
