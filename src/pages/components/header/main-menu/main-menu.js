$(function() {
  $('.main-menu__btn').click(function() {
    $(this).closest('.main-menu').toggleClass('main-menu--open');
  });

  var $link = $('.main-menu__link');
  var url = document.location.href;

  for(var i = 0; i < $link.length; i++) {
    if (url == $link.get(i).href) {
      $link.eq(i).addClass('main-menu__link--active');
    }
  }
});