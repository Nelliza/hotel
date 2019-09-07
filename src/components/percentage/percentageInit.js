import ChartAnimation from '../../vendor/ChartAnimation';

$(() => {
  const className = 'percentage__border';
  const $chart = $(`.js-${className}`);

  $chart.each((index, item) => {
    new ChartAnimation({
      className,
      index,
      $element: $(item),
    });
  });
});
