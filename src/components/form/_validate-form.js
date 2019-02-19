(function($) {
  $.fn.validateForm = function() {
    $('.form__val').removeClass().text('');

    var login = $('#login1');
    if (!login.val() || login.val().length < 3 ) {
      var val_login = true;
      login.next().addClass('form__val form__val--error').text('Error');
    } 
    else {
      login.next().addClass('form__val form__val--correct').text('Thanks!');
    }

    var reg = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
    var email = $('#email1');
    var val_email = email.val() && reg.test(email.val()) ? false : true;

    if (val_email) {
      email.next().addClass('form__val form__val--error').text('Error');
    }
    else {
      email.next().addClass('form__val form__val--correct').text('Thanks!');
    }
    
    //login.val('');
    //email.val('');
  }
})(jQuery);