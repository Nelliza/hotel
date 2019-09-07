import Callback from './Callback';

$(() => {
  const $callback = $('.js-callback__button');
  const $overlay = $('.js-callback__overlay');

  $callback.each((index, item) => {
    new Callback({
      index,
      $element: $(item),
      overlay: $overlay,
    });
  });
});
