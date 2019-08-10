class Form {
  constructor(options) {
    this.$form = options.elem;
    this.index = options.index;
    this.init();
  }

  init() {
    this.$form.on(`submit.form${this.index}`, this._handleFormSubmit.bind(this));
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    this._validateForm();
  }

  _validateForm() {
    const $formVal = this.$form.find('.js-form__val');
    $formVal.removeClass().text('');

    const $loginField = this.$form.find('input[name="name"]');

    if (this._checkLoginEntry($loginField.val())) {
      $loginField.next().addClass('form__val js-form__val form__val_type_correct').text('Thanks!');
    } else {
      $loginField.next().addClass('form__val js-form__val form__val_type_error').text('Error');
    }

    const regexp = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
    const emailField = this.$form.find('input[name="email"]');
    const email = !emailField.val() || !regexp.test(emailField.val());

    if (email) {
      emailField.next().addClass('form__val js-form__val form__val_type_error').text('Error');
    } else {
      emailField.next().addClass('form__val js-form__val form__val_type_correct').text('Thanks!');
    }
  }

  _checkLoginEntry(value) {
    return (value.indexOf(' ') === -1) && (value.length >= 3);
  }
}

export default Form;
