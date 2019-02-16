require('../../vendor/Material-Design-Style-Ripple-Effect-On-Click-Touch-Ripple-js/ripple.js');

$(function() {
  $('.button').click(function() {
    $(this).addClass('button--pressed');
  });
});