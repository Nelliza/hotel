import 'webpack-jquery-ui/datepicker';

class Calendar {
  constructor(options) {
    this.$elem = options.elem;
    this.index = options.index;
    this.$calendar = null;
    this.init();
  }

  init() {
    if (!this.$elem.hasClass('js-calendar_with-range')) {
      this._initSimpleCalendar();
    } else {
      this._initRangeCalendar();
    }
  }

  _initSimpleCalendar() {
    const $calendar = this.$elem.find('div.js-calendar__datepicker');
    $calendar.datepicker({
      firstDay: 1,
      dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      prevText: '',
      nextText: '',
      showOtherMonths: true,
      onSelect: this._displayCurrentDay.bind(this, $calendar),
    });

    const $today = this.$elem.find('.js-calendar__today');
    if ($today.length > 0) {
      $today.on(`click.todayButton${this.index}`, this._handleTodayClick.bind(this, $calendar));
    }

    this._displayCurrentDay($calendar);
  }

  _initRangeCalendar() {
    const $from = this.$elem.find('input.js-calendar__datepicker[name="from"]');
    const $to = this.$elem.find('input.js-calendar__datepicker[name="to"]');
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

  _displayCurrentDay($calendar) {
    const $day = this.$elem.find('.js-calendar__day');
    if ($day.length > 0) {
      const currentDay = $calendar.datepicker('getDate').getDate();
      $day.text(currentDay);
    }
  }

  _handleTodayClick($calendar) {
    const todayDate = new Date();
    $calendar.datepicker('setDate', todayDate);
    this._displayCurrentDay($calendar);
  }

  _handleRangeChange($currentElem, $oppositeElem, option) {
    $oppositeElem.datepicker('option', option, this._getDate($currentElem));
  }

  _getDate(elem) {
    const dateFormat = 'mm/dd/yy';
    let date;

    try {
      date = $.datepicker.parseDate(dateFormat, elem.val());
    } catch (error) {
      date = null;
    }

    return date;
  }
}

export default Calendar;
