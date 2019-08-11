import Reservation from './Reservation';

$(() => {
  const $reservation = $('.js-reservation');

  $reservation.each((index, elem) => {
    new Reservation({
      index,
      elem: $(elem),
      dotsContainer: '.reservation__stages > .stages',
      stageContainer: '.js-stages__item',
    });
  });
});
