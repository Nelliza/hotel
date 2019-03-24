$(window).scroll(function() {
  $('.pie-chart__item').each(function() {
    if (isScrolledIntoView(this) === true) {
      $(this).addClass('pie-chart__item--animated');
    }
  });
});