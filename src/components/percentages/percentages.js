require('percircle');
require('../../vendor/Peity/jquery.peity.min.js');

$(function() {
  $('.percentage').percircle({
    progressBarColor: '#e75735'
  });

  $('.pie-chart').peity('donut', {
    fill: ['#747474', '#e75735', '#4eb7a8', '#e5e5e5'],
    width: '9rem',
    height: '9rem',
    innerRadius: 47
  });
});