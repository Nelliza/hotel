import 'webpack-jquery-ui/slider';

class Slider {
  constructor(options) {
    this.$slider = options.slider;
    this.options = options.options;
    this.init();
  }

  init() {
    const optionsSliderWithPointer = {
      create: this._createSliderWithPointer,
      slide: this._slideSliderWithPointer,
    };
    const optionsSliderWithScale = {
      create: this._createSliderWithScale,
    };
    let options = {};

    if (this.$slider.hasClass('slider--with-pointer')) {
      options = $.extend(this.options, optionsSliderWithPointer);
    } else {
      options = $.extend(this.options, optionsSliderWithScale);
    }

    this.$slider.slider(options);
  }

  _createSliderWithPointer() {
    const pointer = $(this).find('.slider__pointer');
    pointer.text($(this).slider('option', 'value') || $(this).slider('option', 'min'));
  }

  _slideSliderWithPointer(event, ui) {
    const pointer = $(this).find('.slider__pointer');
    pointer.text(ui.value);
  }

  _createSliderWithScale() {
    const ul = $(this).find('.slider__scale');
    const count = ($(this).slider('option', 'max') - $(this).slider('option', 'min')) / $(this).slider('option', 'step');
    const distance = 100 / count;
    let step = $(this).slider('option', 'min');
    let left = 0;

    for (let i = 0; i <= count; i += 1) {
      ul.append($('<li>', {
        class: 'slider__step',
        text: step,
        style: `left: ${(left - 1)}%`,
      }));
      step += $(this).slider('option', 'step');
      left += distance;
    }
  }
}

export default Slider;
