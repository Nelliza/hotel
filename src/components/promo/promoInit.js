import Promo from './Promo';

$(() => {
  const $carousel = $('.js-promo__carousel');

  $carousel.each((index, elem) => {
    new Promo($(elem));
  });
});
