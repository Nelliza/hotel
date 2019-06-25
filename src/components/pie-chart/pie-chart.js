import '../_animations/_animations.js';

$(window).scroll(function() {
  $('.pie-chart__item').each(function() {
    if (window.isScrolledIntoView(this) === true) {
      $(this).addClass('pie-chart__item--animated');
    }
  });
});