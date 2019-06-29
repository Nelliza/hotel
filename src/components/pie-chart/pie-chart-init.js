import ChartAnimation from '../percentage/percentage';

$(() => {
  const className = 'pie-chart__item';
  const $chart = $(`.${className}`);

  $chart.each((index, elem) => {
    new ChartAnimation({
      className,
      chart: $(elem),
    });
  });
});
