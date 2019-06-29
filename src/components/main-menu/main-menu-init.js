import MainMenu from './main-menu';

$(() => {
  const $menu = $('.main-menu');

  $menu.each((index, elem) => {
    new MainMenu($(elem));
  });
});
