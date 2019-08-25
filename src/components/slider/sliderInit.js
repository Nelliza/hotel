import Slider from './Slider';

$(() => {
  const $slider = $('.js-slider');

  $slider.each((index, elem) => {
    const $elem = $(elem);
    new Slider({
      $elem,
      options: {
        min: $elem.data('min'),
        max: $elem.data('max'),
        value: $elem.data('value'),
        step: $elem.data('step'),
        range: $elem.data('range'),
      },
    });
  });
});
