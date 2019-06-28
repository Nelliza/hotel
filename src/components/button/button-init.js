import Button from './button';

$(() => {
  const $elem = $('.button');

  $elem.each((index, elem) => {
    new Button($(elem));
  });
});