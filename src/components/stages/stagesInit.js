import Stages from './Stages';

$(() => {
  const $stages = $('.page__stages .stages');

  $stages.each((index, elem) => {
    new Stages({
      stages: $(elem),
      current: 3,
    });
  });
});
