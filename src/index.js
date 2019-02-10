import $ from 'jquery';
const jQuery = $;
window.jQuery = $;
window.$ = $;

require('webpack-jquery-ui/slider');
require('percircle');

require('./vendor/Material-Design-Style-Ripple-Effect-On-Click-Touch-Ripple-js/ripple.js');
require('./vendor/Peity/jquery.peity.min.js');

import './scss/main.scss';

$(function(){

  $('.btn').click(function() {
    $(this).addClass('btn--pressed');
  });

  $('.percircle').percircle({
    progressBarColor: '#e75735'
  });

  $('.pie-chart').peity('donut', {
    fill: ['#747474', '#e75735', '#4eb7a8', '#e5e5e5'],
    width: '9.2rem',
    height: '9.2rem',
    innerRadius: 47
  });

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