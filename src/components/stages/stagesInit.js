import Stages from './Stages';

$(() => {
  const $stages = $('.js-page__stages .js-stages');

  $stages.each((index, elem) => {
    new Stages({
      index,
      elem: $(elem),
      current: 3,
    });
  });
});
