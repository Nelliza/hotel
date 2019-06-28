import Slider from './slider';

$(() => {
  const $slider = $('.page__sliders .slider'),
        $sliderWithPointer = $slider.filter('.slider--with-pointer'),
        $sliderWithScale = $slider.filter('.slider--with-scale');

  $sliderWithPointer.each((index, elem) => {
    new Slider({
      slider: $(elem),
      options: {
        value: 40
      }
    });
  });

  $sliderWithScale.each((index, elem) => {
    new Slider({
      slider: $(elem),
      options: {
        value: 75,
        step: 25,
        range: 'min'
      }
    });
  });
});