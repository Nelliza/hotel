require('jquery-validation');

$.validator.prototype.hideThese = function(errors) {
  errors.not(this.containers).text("Thanks!");
};

$(function(){
  $('.form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        minlength: 2
      }
    },
    messages: {
      name: {
        required: "Error",
        minlength: "Error"
      },
      email: {
        required: "Error",
        email: "Error"  
      }
    }
  });
});