class Promo {
  constructor(carousel) {
    this.$carousel = carousel;
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
    $prevBtn.addClass('page__arrow--carousel page__arrow--prev');
    $prevBtn.append('<div class="arrow arrow--prev">');

    const $nextBtn = this.$carousel.find('.owl-next');
    $nextBtn.addClass('page__arrow--carousel page__arrow--next');
    $nextBtn.append('<div class="arrow arrow--next">');
  }
}

export default Promo;
