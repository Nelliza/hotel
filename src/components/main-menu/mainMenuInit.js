import MainMenu from './MainMenu';

$(() => {
  const $menu = $('.main-menu');

  $menu.each((index, elem) => {
    new MainMenu($(elem));
  });
});
