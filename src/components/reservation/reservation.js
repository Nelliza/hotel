import Slider from '../slider/slider';
import Stages from '../stages/stages';

class Reservation {
  constructor(reservation) {
    this.$reservation = reservation;
    this.init();
  }

  init() {
    let $carousel = this.$reservation.find('.carousel'),
        $stages = this.$reservation.find('.stages'),
        $datepicker = this.$reservation.find('.calendar'),
        $slider = this.$reservation.find('.slider');

    this._initCarousel($carousel);
    this._initStages($stages);
    this._initDatepicker($datepicker);
    this._initSlider($slider);
  }

  _initCarousel($carousel) {
    $carousel.owlCarousel({
      items: 1,
      dots: true,
      dotsContainer: '.reservation__stages > .stages',
      mouseDrag: false
    });

    let $stage = this.$reservation.find('.stages__item');
    $stage.on('click', this._handleStageClick.bind(this, $carousel));
  }

  _handleStageClick($carousel, event) {
    $carousel.trigger('to.owl.carousel', [$(event.currentTarget).index(), 300]);
  }

  _initStages($stages) {
    $stages.each((index, elem) => {
      new Stages({
        stages: $(elem),
        current: 1
      });
    });
  }

  _initDatepicker($datepicker) {
    let $from = $datepicker.find('input[name="from"]'),
        $to = $datepicker.find('input[name="to"]');

    $from.datepicker({
            defaultDate: '+1w',
            firstDay: 1,
            dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
          })
         .on('change', this._handleFromChange.bind(this, $to));

    $to.datepicker({
          defaultDate: '+1w',
          firstDay: 1,
          dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
        })
        .on('change', this._handleToChange.bind(this, $from));
  }

  _handleFromChange($to, event) {
    $to.datepicker('option', 'minDate', this._getDate($(event.currentTarget)));
  }

  _handleToChange($from, event) {
    $from.datepicker('option', 'maxDate', this._getDate($(event.currentTarget)));
  }

  _getDate(elem) {
    let dateFormat = 'mm/dd/yy',
        date;

    try {
      date = $.datepicker.parseDate(dateFormat, elem.val());
    }
    catch(error) {
      date = null;
    }

    return date;
  }

  _initSlider($slider) {
    let $sliderWithPointer = $slider.filter('.slider--with-pointer'),
        $sliderWithScale = $slider.filter('.slider--with-scale');

    $sliderWithPointer.each((index, elem) => {
      new Slider({
        slider: $(elem),
        options: {
          min: 1,
          max: 10
        }
      });
    });

    $sliderWithScale.each((index, elem) => {
      new Slider({
        slider: $(elem),
        options: {
          min: 1,
          max: 5,
          step: 1,
          range: 'min'
        }
      });
    });
  }
}

export default Reservation;