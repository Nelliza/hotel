$(function() {
  $('.promo > .carousel').owlCarousel({
    items: 1,
    nav: true,
    navText: false,
    dots: false,
    autoplay: true
  });

  $('.owl-prev').attr('class', 'arrow arrow--prev arrow--carousel');
  $('.owl-next').attr('class', 'arrow arrow--next arrow--carousel');
});