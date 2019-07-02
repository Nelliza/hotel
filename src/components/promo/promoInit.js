import Promo from './Promo';

$(() => {
  const $carousel = $('.js-promo > .js-carousel');

  $carousel.each((index, elem) => {
    new Promo($(elem));
  });
});
