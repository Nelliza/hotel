import Calendar from './Calendar';

$(() => {
  const $elem = $('.calendar');

  $elem.each((index, elem) => {
    new Calendar($(elem));
  });
});
