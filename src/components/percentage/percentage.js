$(window).scroll(function() {
  $('.percentage__item').each(function() {
    if (isScrolledIntoView(this) === true) {
      $(this).addClass('percentage__item--animated');
    }
  });
});