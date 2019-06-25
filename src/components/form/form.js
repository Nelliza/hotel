import './_validate-form.js';

$(function() {
  $('.form').on('submit', function(e) {
    e.preventDefault();
    $(this).validateForm();
  });
});