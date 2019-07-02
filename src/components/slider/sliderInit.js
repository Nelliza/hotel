import Slider from './Slider';

$(() => {
  const $slider = $('.js-page__sliders .js-slider');
  const $sliderWithPointer = $slider.filter('.js-slider--with-pointer');
  const $sliderWithScale = $slider.filter('.js-slider--with-scale');

  $sliderWithPointer.each((index, elem) => {
    new Slider({
      elem: $(elem),
      options: {
        value: 40,
      },
    });
  });

  $sliderWithScale.each((index, elem) => {
    new Slider({
      elem: $(elem),
      options: {
        value: 75,
        step: 25,
        range: 'min',
      },
    });
  });
});
