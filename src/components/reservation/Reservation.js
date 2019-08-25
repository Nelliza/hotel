import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

class Reservation {
  constructor(options) {
    this.$reservation = options.$elem;
    this.index = options.index;
    this.init({
      dotsContainer: options.dotsContainer,
      stageContainer: options.stageContainer,
    });
  }

  init({ dotsContainer, stageContainer }) {
    const $carousel = this.$reservation.find('.js-reservation__carousel');
    $carousel.owlCarousel({
      dotsContainer,
      items: 1,
      dots: true,
      mouseDrag: false,
    });

    const $stage = this.$reservation.find(stageContainer);
    $stage.on(`click.stage${this.index}`, this._handleStageClick.bind(this, $carousel));
  }

  _handleStageClick($carousel, event) {
    $carousel.trigger('to.owl.carousel', [$(event.currentTarget).index(), 300]);
  }
}

export default Reservation;
