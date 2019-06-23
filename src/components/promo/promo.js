$(function() {
  $('.promo > .carousel').owlCarousel({
    items: 1,
    nav: true,
    navText: false,
    dots: false,
    autoplay: true
  });

  $('.owl-prev').addClass('page__arrow--carousel page__arrow--prev');
  $('.owl-next').addClass('page__arrow--carousel page__arrow--next');
  $('.owl-prev').append('<div class="arrow arrow--prev">');
  $('.owl-next').append('<div class="arrow arrow--next">');
});