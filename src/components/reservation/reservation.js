$(function() {
  var dateFormat = 'mm/dd/yy',
    from = $('.calendar input[name="from"]')
      .datepicker({
        defaultDate: '+1w',
        firstDay: 1,
        dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
      })
      .on('change', function() {
        to.datepicker('option', 'minDate', getDate(this));
      }),
    to = $('.calendar input[name="to"]')
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

  $('.reservation__stages > .stages').stages({
    current: 1
  });

  $('.carousel--reservation').owlCarousel({
    items: 1,
    dots: true,
    dotsContainer: '.reservation__stages > .stages',
    mouseDrag: false
  });

  $('.stages__item').click(function(){
    $('.carousel--reservation').trigger('to.owl.carousel', [$(this).index(), 300]);  
  });

  $('.reservation__item:not(:last-child) > .slider').slider({
    min: 1,
    max: 10,
    create: sliderPointerInitial,
    slide: sliderPointer
  });

  $('.reservation__item:last-child > .slider').slider({
    min: 1,
    max: 5,
    step: 1,
    range: 'min',
    create: sliderScale
  });
});