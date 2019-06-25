import '../_animations/_animations.js';

$(window).scroll(function() {
  $('.percentage__item').each(function() {
    if (window.isScrolledIntoView(this) === true) {
      $(this).addClass('percentage__item--animated');
    }
  });
});