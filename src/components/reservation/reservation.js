$(function() {
  var dateFormat = 'mm/dd/yy',
    from = $('#from')
      .datepicker({
        defaultDate: '+1w',
        firstDay: 1,
        dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
      })
      .on('change', function() {
        to.datepicker('option', 'minDate', getDate(this));
      }),
    to = $('#to')
      .datepicker({
        defaultDate: '+1w',
        firstDay: 1,
        dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
      })
      .on('change', function() {
        from.datepicker('option', 'maxDate', getDate(this));
      });

  function getDate(element) {
    var $date;
    try {
      $date = $.datepicker.parseDate(dateFormat, element.value);
    }
    catch(error) {
      $date = null;
    }

    return $date;
  }

  $('#stages2').stages({
    current: 1
  });

  $('#carousel2').owlCarousel({
    items: 1,
    dots: true,
    dotsContainer: '#stages2',
    mouseDrag: false
  });

  $('.stages__item').click(function(){
    $('#carousel2').trigger('to.owl.carousel', [$(this).index(), 300]);  
  });

  $('#slider3').slider({
    min: 1,
    max: 10,
    create: sliderPointerInitial,
    slide: sliderPointer
  });

  $('#slider4').slider({
    min: 1,
    max: 10,
    create: sliderPointerInitial,
    slide: sliderPointer
  });

  $('#slider5').slider({
    min: 1,
    max: 5,
    step: 1,
    range: 'min',
    create: sliderScale
  });
});