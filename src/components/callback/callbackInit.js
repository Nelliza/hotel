import Callback from './Callback';

$(() => {
  const $callback = $('.js-callback');
  const $overlay = $('.js-overlay');

  $callback.each((index, elem) => {
    new Callback({
      index,
      elem: $(elem),
      overlay: $overlay,
    });
  });
});
