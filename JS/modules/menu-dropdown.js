import outsideClick from './outsideclick.js';

export default class MenuDropdown {
  constructor(menu, events) {
    this.dropdownMenus = document.querySelectorAll(menu);
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeClass = 'active';
    this.activeDropMenu = this.activeDropMenu.bind(this);
  }

  activeDropMenu(event) {
    event.preventDefault();
    const target = event.currentTarget;
    target.classList.add(this.activeClass);
    outsideClick(target, this.events, () => {
      target.classList.remove(this.activeClass);
    });
  }

  addDropdownEvents() {
    this.dropdownMenus.forEach((item) => {
      this.events.forEach((event) => {
        item.addEventListener(event, this.activeDropMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownEvents();
    }
    return this;
  }
}
