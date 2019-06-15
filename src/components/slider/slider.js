$(function() {
  $('.section-wrapper--sliders .slider--with-pointer').slider({
    value: 40,
    create: sliderPointerInitial,
    slide: sliderPointer
  });

  $('.section-wrapper--sliders .slider--with-scale').slider({
    value: 75,
    step: 25,
    range: 'min',
    create: sliderScale
  });
});