require('webpack-jquery-ui/slider');

$(function() {
  $('.slider--with-scale').slider({
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