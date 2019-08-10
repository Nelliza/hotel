import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

class Reservation {
  constructor(options) {
    this.$reservation = options.elem;
    this.index = options.index;
    this.init();
  }

  init() {
    const $carousel = this.$reservation.find('.js-reservation__carousel');
    $carousel.owlCarousel({
      items: 1,
      dots: true,
      dotsContainer: '.reservation__stages > .stages',
      mouseDrag: false,
    });

    const $stage = this.$reservation.find('.js-stages__item');
    $stage.on(`click.stage${this.index}`, this._handleStageClick.bind(this, $carousel));
  }

  _handleStageClick($carousel, event) {
    $carousel.trigger('to.owl.carousel', [$(event.currentTarget).index(), 300]);
  }
}

export default Reservation;
