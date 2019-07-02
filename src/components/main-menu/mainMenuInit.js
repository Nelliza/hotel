import MainMenu from './MainMenu';

$(() => {
  const $menu = $('.js-main-menu');

  $menu.each((index, elem) => {
    new MainMenu({
      index,
      elem: $(elem),
    });
  });
});
