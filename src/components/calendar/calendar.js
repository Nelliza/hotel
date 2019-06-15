$(function() {
  currentDay();

  $('.calendar__datepicker').datepicker({
    showButtonPanel: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    prevText: '',
    nextText: '',
    onSelect: selectedDay,
    onChangeMonthYear: cleanDay
  });

  function currentDay() {
    var dayText = $.datepicker.formatDate('dd', new Date());
    $('.calendar__day').text(dayText);
  }

  function selectedDay() {
    var dayText = $.datepicker.formatDate('dd', $(this).datepicker('getDate'));
    $('.calendar__day').text(dayText);
  }

  function cleanDay() {
    $('.calendar__day').text('');
  }
});
