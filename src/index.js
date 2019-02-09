import './scss/main.scss';

import $ from 'jquery';
const jQuery = $;
window.jQuery = $;
window.$ = $;

require('percircle');

require('./vendor/Material-Design-Style-Ripple-Effect-On-Click-Touch-Ripple-js/ripple.js');
require('./vendor/Peity/jquery.peity.min.js');

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
});