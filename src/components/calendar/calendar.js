$(function() {
  currentDay();

  $('.calendar__datepicker').datepicker({
    showButtonPanel: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    prevText: '',
    nextText: '',
    onSelect: selectedDay
  });

  $.datepicker._gotoToday = function(id) {
    var date,
      target = $(id),
      inst = this._getInst(target[0]);

    if (this._get(inst, "gotoCurrent") && inst.currentDay) {
      inst.selectedDay = inst.currentDay;
      inst.drawMonth = inst.selectedMonth = inst.currentMonth;
      inst.drawYear = inst.selectedYear = inst.currentYear;
    } else {
      date = new Date();
      inst.selectedDay = date.getDate();
      inst.drawMonth = inst.selectedMonth = date.getMonth();
      inst.drawYear = inst.selectedYear = date.getFullYear();
      this._setDateDatepicker(target, date);
      this._selectDate(id, this._getDateDatepicker(target));
    }

    this._notifyChange(inst);
    this._adjustDate(target);
  }

  function currentDay() {
    var dayText = $.datepicker.formatDate('dd', new Date());
    $('.calendar__day').text(dayText);
  }

  function selectedDay() {
    var dayText = $.datepicker.formatDate('dd', $(this).datepicker('getDate'));
    $('.calendar__day').text(dayText);
  }
});
