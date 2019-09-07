import Menu from './Menu';

$(() => {
  const $menu = $('.js-menu');

  $menu.each((index, item) => {
    new Menu({
      index,
      $element: $(item),
    });
  });
});
