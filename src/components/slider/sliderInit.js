import Slider from './Slider';

$(() => {
  const $slider = $('.js-slider');

  $slider.each((index, item) => {
    const $element = $(item);
    new Slider({
      $element,
      options: {
        min: $element.data('min'),
        max: $element.data('max'),
        value: $element.data('value'),
        step: $element.data('step'),
        range: $element.data('range'),
      },
    });
  });
});
