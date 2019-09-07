import Button from './Button';

$(() => {
  const $element = $('.js-button');

  $element.each((index, item) => {
    new Button({
      index,
      $element: $(item),
    });
  });
});
