import Callback from './Callback';

$(() => {
  const $callback = $('.js-callback__button');
  const $overlay = $('.js-callback__overlay');

  $callback.each((index, elem) => {
    new Callback({
      index,
      elem: $(elem),
      overlay: $overlay,
    });
  });
});
