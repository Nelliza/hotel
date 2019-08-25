class Form {
  constructor(options) {
    this.$form = options.$elem;
    this.index = options.index;
    this.init();
  }

  init() {
    this.$field = this.$form.find('.js-form__field');
    this.$field.on(`focusout.field${this.index}`, this._handleFieldFocusout.bind(this));
    this.$form.on(`submit.form${this.index}`, this._handleFormSubmit.bind(this));
  }

  _handleFieldFocusout(event) {
    const $checkedField = $(event.currentTarget);
    this._validateField($checkedField);
  }

  _validateField($checkedField) {
    const fieldName = $checkedField.attr('name');
    let regexp;

    if (fieldName === 'login') {
      regexp = /^[a-zA-Z][a-zA-Z0-9-_\.]{2,20}$/i;
    } else if (fieldName === 'email') {
      regexp = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
    }

    this._checkField({ $checkedField, regexp });
  }

  _checkField({ $checkedField, regexp }) {
    if (regexp.test($checkedField.val())) {
      $checkedField.next().attr('class', 'form__tooltip js-form__tooltip form__tooltip_type_correct').text('Thanks!');
    } else {
      $checkedField.next().attr('class', 'form__tooltip js-form__tooltip form__tooltip_type_error').text('Error');
    }
  }

  _handleFormSubmit(event) {
    this.$field.each((index, elem) => {
      this._validateField($(elem));
    });

    const $tooltip = this.$form.find('.js-form__tooltip');

    if ($tooltip.hasClass('form__tooltip_type_error')) {
      event.preventDefault();
    }
  }
}

export default Form;
