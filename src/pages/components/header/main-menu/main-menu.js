$(function() {
  $('.main-menu__btn').click(function() {
    $(this).closest('.main-menu').toggleClass('main-menu--open');
  });
});