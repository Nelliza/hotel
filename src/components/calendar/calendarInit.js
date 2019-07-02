import Calendar from './Calendar';

$(() => {
  const $elem = $('.js-calendar');

  $elem.each((index, elem) => {
    new Calendar($(elem));
  });
});
