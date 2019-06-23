$(function() {
  $('.page__sliders .slider--with-pointer').slider({
    value: 40,
    create: sliderPointerInitial,
    slide: sliderPointer
  });

  $('.page__sliders .slider--with-scale').slider({
    value: 75,
    step: 25,
    range: 'min',
    create: sliderScale
  });
});