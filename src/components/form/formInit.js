import Form from './Form';

$(() => {
  const $form = $('.form');

  $form.each((index, elem) => {
    new Form($(elem));
  });
});
