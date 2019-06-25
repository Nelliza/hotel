import './_slider.js';

$(function() {
  $('.page__sliders .slider--with-pointer').slider({
    value: 40,
    create: window.sliderPointerInitial,
    slide: window.sliderPointer
  });

  $('.page__sliders .slider--with-scale').slider({
    value: 75,
    step: 25,
    range: 'min',
    create: window.sliderScale
  });
});