import Form from './Form';

$(() => {
  const $form = $('.js-form');

  $form.each((index, elem) => {
    new Form({
      index,
      $elem: $(elem),
    });
  });
});
