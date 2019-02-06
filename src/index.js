import './scss/main.scss';

import $ from 'jquery';
const jQuery = $;
window.jQuery = $;
window.$ = $;

require('percircle');

require('./vendor/Peity/jquery.peity.js');

$(function(){
  $('.percircle').percircle({
    progressBarColor: '#e75735'
  });

  $('.pie-chart').peity('donut', {
    fill: ['#747474', '#e75735', '#4eb7a8', '#e5e5e5'],
    width: '7.5rem',
    height: '7.5rem'
  });
});