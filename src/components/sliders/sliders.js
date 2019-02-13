require('webpack-jquery-ui/slider');

$(function() {
  var pointer = $('.slider__pointer');
  $('#slider1').slider({
    value: 40,
    create: function() {
      pointer.text($(this).slider('value'));
    },
    slide: function() {
      pointer.text($(this).slider('value'));
    }
  });

  $('#slider2').slider({
    value: 75,
    step: 25,
    range: 'min',
    create: function() {
      var ul = $('.slider__scale');
      var count = $(this).slider('option', 'max') / $(this).slider('option', 'step') + 1;
      var step = 0;
      for (var i = 0; i < count; i++) {
        ul.append($('<li>', {
          class: 'slider__step',
          text: step,
          style: 'left: ' + step + '%'
        }));
        step += $(this).slider('option', 'step');
      }
      ul.appendTo('#slider2');
    }
  });
});