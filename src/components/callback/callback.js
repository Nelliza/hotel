$(function() {
  $('.callback').click(function() {
    $(this).next('.messaging').toggleClass('messaging--visible');
  });
  $('.overlay').click(function() {
    $(this).prev('.messaging').toggleClass('messaging--visible');
  });
});