import Stages from './Stages';

$(() => {
  const $stages = $('.js-stages');

  $stages.each((index, elem) => {
    new Stages({
      index,
      elem: $(elem),
    });
  });
});
