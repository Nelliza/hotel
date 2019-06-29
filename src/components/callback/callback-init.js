import Callback from './callback';

$(() => {
  const $callback = $('.callback');
  const $overlay = $('.overlay');

  $callback.each((index, elem) => {
    new Callback({
      callback: $(elem),
      overlay: $overlay,
    });
  });
});
