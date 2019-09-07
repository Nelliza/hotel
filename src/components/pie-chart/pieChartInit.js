import ChartAnimation from '../../vendor/ChartAnimation';

$(() => {
  const className = 'pie-chart__border';
  const $chart = $(`.js-${className}`);

  $chart.each((index, item) => {
    new ChartAnimation({
      className,
      index,
      $element: $(item),
    });
  });
});
