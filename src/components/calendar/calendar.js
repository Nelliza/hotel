$(function() {
  currentDay();

  $('#datepicker').datepicker({
    showButtonPanel: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    prevText: '',
    nextText: '',
    onSelect: selectedDay
  });

  function currentDay() {
    var dayText = $.datepicker.formatDate('d', new Date());
    $('.calendar__day').text(dayText);
  }

  function selectedDay() {
    var dayText = $.datepicker.formatDate('d', $(this).datepicker('getDate'));
    $('.calendar__day').text(dayText);
  }
});
