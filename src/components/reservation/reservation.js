import Slider from '../slider/Slider';
import Stages from '../stages/Stages';

class Reservation {
  constructor(reservation) {
    this.$reservation = reservation;
    this.init();
  }

  init() {
    const $carousel = this.$reservation.find('.carousel');
    const $stages = this.$reservation.find('.stages');
    const $datepicker = this.$reservation.find('.calendar');
    const $slider = this.$reservation.find('.slider');

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
      mouseDrag: false,
    });

    const $stage = this.$reservation.find('.stages__item');
    $stage.on('click', this._handleStageClick.bind(this, $carousel));
  }

  _handleStageClick($carousel, event) {
    $carousel.trigger('to.owl.carousel', [$(event.currentTarget).index(), 300]);
  }

  _initStages($stages) {
    $stages.each((index, elem) => {
      new Stages({
        stages: $(elem),
        current: 1,
      });
    });
  }

  _initDatepicker($datepicker) {
    const $from = $datepicker.find('input[name="from"]');
    const $to = $datepicker.find('input[name="to"]');

    $from.datepicker({
      defaultDate: '+1w',
      firstDay: 1,
      dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    })
      .on('change', this._handleFromChange.bind(this, $to));

    $to.datepicker({
      defaultDate: '+1w',
      firstDay: 1,
      dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
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
    const dateFormat = 'mm/dd/yy';
    let date;

    try {
      date = $.datepicker.parseDate(dateFormat, elem.val());
    } catch (error) {
      date = null;
    }

    return date;
  }

  _initSlider($slider) {
    const $sliderWithPointer = $slider.filter('.slider--with-pointer');
    const $sliderWithScale = $slider.filter('.slider--with-scale');

    $sliderWithPointer.each((index, elem) => {
      new Slider({
        slider: $(elem),
        options: {
          min: 1,
          max: 10,
        },
      });
    });

    $sliderWithScale.each((index, elem) => {
      new Slider({
        slider: $(elem),
        options: {
          min: 1,
          max: 5,
          step: 1,
          range: 'min',
        },
      });
    });
  }
}

export default Reservation;
