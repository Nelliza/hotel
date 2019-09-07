import Form from './Form';

$(() => {
  const $form = $('.js-form');

  $form.each((index, item) => {
    new Form({
      index,
      $element: $(item),
    });
  });
});
