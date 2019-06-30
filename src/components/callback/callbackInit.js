import Callback from './Callback';

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
