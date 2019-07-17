import Menu from './Menu';

$(() => {
  const $menu = $('.js-menu');

  $menu.each((index, elem) => {
    new Menu({
      index,
      elem: $(elem),
    });
  });
});
