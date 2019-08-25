import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

class Promo {
  constructor($elem) {
    this.$carousel = $elem;
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

    const $prevButton = this.$carousel.find('.owl-prev');
    $prevButton.addClass('promo__arrow promo__arrow_orientation_left');
    $prevButton.append('<div class="arrow arrow_orientation_left arrow_size_small">');

    const $nextButton = this.$carousel.find('.owl-next');
    $nextButton.addClass('promo__arrow promo__arrow_orientation_right');
    $nextButton.append('<div class="arrow arrow_orientation_right arrow_size_small">');
  }
}

export default Promo;
