import Calendar from './Calendar';

$(() => {
  const $element = $('.js-calendar');

  $element.each((index, item) => {
    new Calendar({
      index,
      $element: $(item),
    });
  });
});
