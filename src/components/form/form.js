class Form {
  constructor(form) {
    this.$form = form;
    this.init();
  }

  init() {
    this.$form.on('submit', this._handleFormSubmit.bind(this));
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    this._validateForm();
  }

  _validateForm() {
    let $formVal = this.$form.find('.form__val');
    $formVal.removeClass().text('');

    let login = this.$form.find('input[name="name"]');
    if (!login.val() || login.val().length < 3 ) {
      login.next().addClass('form__val form__val--error').text('Error');
    } 
    else {
      login.next().addClass('form__val form__val--correct').text('Thanks!');
    }

    let reg = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
    let email = this.$form.find('input[name="email"]');
    let valEmail = !email.val() || !reg.test(email.val());

    if (valEmail) {
      email.next().addClass('form__val form__val--error').text('Error');
    }
    else {
      email.next().addClass('form__val form__val--correct').text('Thanks!');
    }
  }
}

export default Form;