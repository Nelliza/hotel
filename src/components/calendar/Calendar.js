import 'webpack-jquery-ui/datepicker';

class Calendar {
  constructor(options) {
    this.$elem = options.elem;
    this.index = options.index;
    this.$calendar = null;
    this.init();
  }

  init() {
    this.$calendar = this.$elem.find('.js-calendar__datepicker');

    this.$calendar.datepicker({
      firstDay: 1,
      dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      prevText: '',
      nextText: '',
      showOtherMonths: true,
      onSelect: this._displayCurrentDay.bind(this),
    });

    const $today = this.$elem.find('.calendar__today');
    $today.on(`click.todayButton${this.index}`, this._handleTodayClick.bind(this));

    this._displayCurrentDay();
  }

  _displayCurrentDay() {
    const currentDay = this.$calendar.datepicker('getDate').getDate();
    const $day = this.$elem.find('.js-calendar__day');
    $day.text(currentDay);
  }

  _handleTodayClick() {
    const todayDate = new Date();
    this.$calendar.datepicker('setDate', todayDate);
    this._displayCurrentDay();
  }
}

export default Calendar;
