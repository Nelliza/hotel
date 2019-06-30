import Reservation from './Reservation';

$(() => {
  const $reservation = $('.reservation');

  $reservation.each((index, elem) => {
    new Reservation($(elem));
  });
});
