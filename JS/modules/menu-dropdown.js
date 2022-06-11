import outsideClick from './outsideclick.js';

export default function initMenuDropdown() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');

    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }
  dropdownMenus.forEach((item) => {
    ['touchstart', 'click'].forEach((event) => {
      item.addEventListener(event, handleClick);
    });
  });
}
