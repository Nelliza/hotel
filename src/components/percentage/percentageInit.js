import ChartAnimation from './ChartAnimation';

$(() => {
  const className = 'percentage__item';
  const $chart = $(`.js-${className}`);

  $chart.each((index, elem) => {
    new ChartAnimation({
      className,
      index,
      elem: $(elem),
    });
  });
});
