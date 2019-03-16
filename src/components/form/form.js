$(function() {
  $('.form').on('submit', function(e) {
    e.preventDefault();
    $(this).validateForm($(this).data('id'));
  });
});