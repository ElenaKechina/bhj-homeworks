const mainMenus = document.querySelectorAll('.menu_main');

const menuClick = function (event) {
  const menuItem = event.target.closest('.menu__item');

  if (!menuItem) return;

  const subMenu = menuItem.querySelector('.menu_sub');
  const subMenuItems = menuItem
    .closest('.menu_main')
    .querySelectorAll('.menu_sub');

  if (subMenu) {
    event.preventDefault();

    if (subMenu.classList.contains('menu_active')) {
      subMenu.classList.remove('menu_active');
    } else {
      for (const subMenu of subMenuItems) {
        subMenu.classList.remove('menu_active');
      }
      subMenu.classList.add('menu_active');
    }
  }
};

for (const mainMenu of mainMenus) {
  mainMenu.addEventListener('click', menuClick);
}
