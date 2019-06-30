import Button from './Button';

$(() => {
  const $elem = $('.button');

  $elem.each((index, elem) => {
    new Button($(elem));
  });
});
