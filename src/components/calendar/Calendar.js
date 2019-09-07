import 'webpack-jquery-ui/datepicker';

class Calendar {
  constructor(options) {
    this.$element = options.$element;
    this.index = options.index;
    this.init();
  }

  init() {
    if (!this.$element.hasClass('js-calendar_with-range')) {
      this._initSimpleCalendar();
    } else {
      this._initRangeCalendar();
    }
  }

  _initSimpleCalendar() {
    this.$calendar = this.$element.find('div.js-calendar__datepicker');
    this.$calendar.datepicker({
      firstDay: 1,
      dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      prevText: '',
      nextText: '',
      showOtherMonths: true,
      onSelect: this._displayCurrentDay.bind(this),
    });

    const $today = this.$element.find('.js-calendar__today');
    if ($today.length > 0) {
      $today.on(`click.todayButton${this.index}`, this._handleTodayClick.bind(this));
    }

    this._displayCurrentDay();
  }

  _initRangeCalendar() {
    const $from = this.$element.find('input.js-calendar__datepicker[name="from"]');
    const $to = this.$element.find('input.js-calendar__datepicker[name="to"]');
    const rangeOptions = {
      firstDay: 1,
      dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      minDate: new Date(),
    };

    $from.datepicker(rangeOptions);
    $from.datepicker('option', 'onSelect', this._handleRangeChange.bind(this, $from, $to, 'minDate'));

    $to.datepicker(rangeOptions);
    $to.datepicker('option', 'onSelect', this._handleRangeChange.bind(this, $to, $from, 'maxDate'));
  }

  _displayCurrentDay() {
    const $day = this.$element.find('.js-calendar__day');
    if ($day.length > 0) {
      const currentDay = this.$calendar.datepicker('getDate').getDate();
      $day.text(currentDay);
    }
  }

  _handleTodayClick() {
    const todayDate = new Date();
    this.$calendar.datepicker('setDate', todayDate);
    this._displayCurrentDay();
  }

  _handleRangeChange($currentElement, $oppositeElement, option) {
    $oppositeElement.datepicker('option', option, this._getDate($currentElement));
  }

  _getDate(element) {
    const dateFormat = 'mm/dd/yy';
    let date;

    try {
      date = $.datepicker.parseDate(dateFormat, element.val());
    } catch (error) {
      date = null;
    }

    return date;
  }
}

export default Calendar;
