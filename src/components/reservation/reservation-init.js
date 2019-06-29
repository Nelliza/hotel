import Reservation from './reservation';

$(() => {
  const $reservation = $('.reservation');

  $reservation.each((index, elem) => {
    new Reservation($(elem));
  });
});
