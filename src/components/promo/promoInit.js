import Promo from './Promo';

$(() => {
  const $carousel = $('.promo > .carousel');

  $carousel.each((index, elem) => {
    new Promo($(elem));
  });
});
