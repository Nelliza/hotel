class Slider {
  constructor(options) {
    this.$slider = options.slider;
    this.options = options.options;
    this.init();
  }

  init() {
    let optionsSliderWithPointer = {
          create: this._createSliderWithPointer,
          slide: this._slideSliderWithPointer
        },
        optionsSliderWithScale = {
          create: this._createSliderWithScale
        },
        options = {};

    if (this.$slider.hasClass('slider--with-pointer')) {
      options = $.extend(this.options, optionsSliderWithPointer);
    }
    else {
      options = $.extend(this.options, optionsSliderWithScale);
    }

    this.$slider.slider(options);
  }

  _createSliderWithPointer() {
    let pointer = $(this).find('.slider__pointer');
    pointer.text($(this).slider('option', 'value') || $(this).slider('option', 'min'));
  }

  _slideSliderWithPointer(event, ui) {
    let pointer = $(this).find('.slider__pointer');
    pointer.text(ui.value);
  }

  _createSliderWithScale() {
    let ul = $(this).find('.slider__scale'),
        count = ($(this).slider('option', 'max') - $(this).slider('option', 'min')) / $(this).slider('option', 'step'),
        step = $(this).slider('option', 'min'),
        distance = 100 / count,
        left = 0;

    for (let i = 0; i <= count; i += 1) {
      ul.append($('<li>', {
        class: 'slider__step',
        text: step,
        style: 'left: ' + (left - 1) + '%'
      }));
      step += $(this).slider('option', 'step');
      left += distance;
    }
  }
}

export default Slider;