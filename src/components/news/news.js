$(function() {
  $('.news__button').click(function() {
    var anchor = $(this).attr('href');
    if (anchor) {
      $('html').animate({ 
        scrollTop: $(anchor).offset().top
      }, 1000);
    }
  });
});