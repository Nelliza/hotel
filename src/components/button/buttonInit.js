import Button from './Button';

$(() => {
  const $elem = $('.js-button');

  $elem.each((index, elem) => {
    new Button({
      index,
      $elem: $(elem),
    });
  });
});
