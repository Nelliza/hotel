import Calendar from './calendar';

$(() => {
  const $elem = $('.calendar');

  $elem.each((index, elem) => {
    new Calendar($(elem));
  });
});