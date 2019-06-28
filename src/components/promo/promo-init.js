import Promo from './promo';

$(() => {
  const $carousel = $('.promo > .carousel');

  $carousel.each((index, elem) => {
    new Promo($(elem));
  });
});