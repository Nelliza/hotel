import ChartAnimation from '../percentage/ChartAnimation';

$(() => {
  const className = 'pie-chart__item';
  const $chart = $(`.js-${className}`);

  $chart.each((index, elem) => {
    new ChartAnimation({
      className,
      index,
      elem: $(elem),
    });
  });
});