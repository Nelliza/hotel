import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

class Promo {
  constructor(elem) {
    this.$carousel = elem;
    this.init();
  }

  init() {
    this.$carousel.owlCarousel({
      items: 1,
      nav: true,
      navText: false,
      dots: false,
      autoplay: true,
    });

    const $prevBtn = this.$carousel.find('.owl-prev');
    $prevBtn.addClass('page__arrow_location_carousel page__arrow_orientation_left');
    $prevBtn.append('<div class="arrow arrow_orientation_left arrow_size_small">');

    const $nextBtn = this.$carousel.find('.owl-next');
    $nextBtn.addClass('page__arrow_location_carousel page__arrow_orientation_right');
    $nextBtn.append('<div class="arrow arrow_orientation_right arrow_size_small">');
  }
}

export default Promo;
