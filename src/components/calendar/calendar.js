class Calendar {
  constructor(calendar) {
    this.$calendar = calendar.find('.calendar__datepicker');
    this.$day = calendar.find('.calendar__day');
    this.init();
  }

  init() {
    $.datepicker._gotoToday = function(id) {
      let date,
        $target = $(id),
        inst = this._getInst($target[0]);

      if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
        inst.selectedDay = inst.currentDay;
        inst.drawMonth = inst.selectedMonth = inst.currentMonth;
        inst.drawYear = inst.selectedYear = inst.currentYear;
      } else {
        date = new Date();
        inst.selectedDay = date.getDate();
        inst.drawMonth = inst.selectedMonth = date.getMonth();
        inst.drawYear = inst.selectedYear = date.getFullYear();
        this._setDateDatepicker($target, date);
        this._selectDate(id, this._getDateDatepicker($target));
      }

      this._notifyChange(inst);
      this._adjustDate($target);
    }

    this.$calendar.datepicker({
      showButtonPanel: true,
      firstDay: 1,
      showOtherMonths: true,
      dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      prevText: '',
      nextText: '',
      onSelect: this._selectedDay.bind(this)
    });

    this._currentDay();
  }

  _currentDay() {
    let dayText = $.datepicker.formatDate('dd', new Date());
    this.$day.text(dayText);
  }

  _selectedDay() {
    let dayText = $.datepicker.formatDate('dd', this.$calendar.datepicker('getDate'));
    this.$day.text(dayText);
  }
}

export default Calendar;