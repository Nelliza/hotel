import 'webpack-jquery-ui/datepicker';

class Calendar {
  constructor(elem) {
    this.$calendar = elem.find('.js-calendar__datepicker');
    this.$day = elem.find('.js-calendar__day');
    this.init();
  }

  init() {
    $.datepicker._gotoToday = function (ident) {
      let date;
      const $target = $(ident);
      const inst = this._getInst($target[0]);

      if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
        inst.selectedDay = inst.currentDay;
        inst.drawMonth = inst.currentMonth;
        inst.selectedMonth = inst.drawMonth;
        inst.drawYear = inst.currentYear;
        inst.selectedYear = inst.drawYear;
      } else {
        date = new Date();
        inst.selectedDay = date.getDate();
        inst.drawMonth = date.getMonth();
        inst.selectedMonth = inst.drawMonth;
        inst.drawYear = date.getFullYear();
        inst.selectedYear = inst.drawYear;
        this._setDateDatepicker($target, date);
        this._selectDate(ident, this._getDateDatepicker($target));
      }

      this._notifyChange(inst);
      this._adjustDate($target);
    };

    this.$calendar.datepicker({
      showButtonPanel: true,
      firstDay: 1,
      showOtherMonths: true,
      dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      prevText: '',
      nextText: '',
      onSelect: this._selectedDay.bind(this),
    });

    this._currentDay();
  }

  _currentDay() {
    const dayText = $.datepicker.formatDate('dd', new Date());
    this.$day.text(dayText);
  }

  _selectedDay() {
    const dayText = $.datepicker.formatDate('dd', this.$calendar.datepicker('getDate'));
    this.$day.text(dayText);
  }
}

export default Calendar;
