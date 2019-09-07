import Reservation from './Reservation';

$(() => {
  const $reservation = $('.js-reservation');

  $reservation.each((index, item) => {
    new Reservation({
      index,
      $element: $(item),
      dotsContainer: '.reservation__stages > .stages',
      stageContainer: '.js-stages__item',
    });
  });
});
