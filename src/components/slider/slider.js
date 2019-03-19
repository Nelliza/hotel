$(function() {
  $('#slider1').slider({
    value: 40,
    create: sliderPointerInitial,
    slide: sliderPointer
  });

  $('#slider2').slider({
    value: 75,
    step: 25,
    range: 'min',
    create: sliderScale
  });
});