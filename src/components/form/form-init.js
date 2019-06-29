import Form from './form';

$(() => {
  const $form = $('.form');

  $form.each((index, elem) => {
    new Form($(elem));
  });
});
