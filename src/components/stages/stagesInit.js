import Stages from './Stages';

$(() => {
  const $stages = $('.js-stages');

  $stages.each((index, item) => {
    new Stages({
      index,
      $element: $(item),
    });
  });
});
