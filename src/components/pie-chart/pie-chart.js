require('../../vendor/Peity/jquery.peity.min.js');

$(function() {
  $('.pie-chart').peity('donut', {
    fill: ['#747474', '#e75735', '#4eb7a8', '#e5e5e5'],
    width: '5.9rem',
    height: '5.9rem',
    innerRadius: 30
  });
});