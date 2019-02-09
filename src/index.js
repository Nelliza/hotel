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

  var handle1 = $('#handle1');
  $('#slider1').slider({
    'value': 36,
    create: function() {
      handle1.text($(this).slider('value'));
    },
    slide: function() {
      handle1.text($(this).slider('value'));
    }
  });
});