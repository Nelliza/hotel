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

    const $login = this.$form.find('input[name="name"]');
    if (!$login.val() || $login.val().length < 3) {
      $login.next().addClass('form__val js-form__val form__val--error').text('Error');
    } else {
      $login.next().addClass('form__val js-form__val form__val--correct').text('Thanks!');
    }

    const reg = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
    const email = this.$form.find('input[name="email"]');
    const valEmail = !email.val() || !reg.test(email.val());

    if (valEmail) {
      email.next().addClass('form__val js-form__val form__val--error').text('Error');
    } else {
      email.next().addClass('form__val js-form__val form__val--correct').text('Thanks!');
    }
  }
}

export default Form;
