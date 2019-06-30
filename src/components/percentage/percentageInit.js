import ChartAnimation from './ChartAnimation';

$(() => {
  const className = 'percentage__item';
  const $chart = $(`.${className}`);

  $chart.each((index, elem) => {
    new ChartAnimation({
      className,
      chart: $(elem),
    });
  });
});
