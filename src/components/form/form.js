require('./_validate-form.js');

$(function() {
  $('#form1').on('submit', function(e) {
    e.preventDefault();
    $(this).validateForm();
  });
});