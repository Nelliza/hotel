require('webpack-jquery-ui/slider');

$(function() {
  var pointer = $('.slider__pointer');
  $('.slider--with-pointer').slider({
    value: 40,
    create: function() {
      pointer.text($(this).slider('value'));
    },
    slide: function() {
      pointer.text($(this).slider('value'));
    }
  });
});