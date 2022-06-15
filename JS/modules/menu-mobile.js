import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(buttonMenu, menuList, eventos) {
    this.buttonMenu = document.querySelector(buttonMenu);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';
    if (eventos === undefined) this.eventos = ['click', 'touchstart'];
    else this.eventos = eventos;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.buttonMenu.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    outsideClick(this.menuList, this.eventos, () => {
      this.buttonMenu.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMenuEvent() {
    this.eventos.forEach((evento) => this.buttonMenu.addEventListener(evento, this.openMenu));
  }

  init() {
    if (this.buttonMenu && this.menuList) {
      this.addMenuEvent();
    }
    return this;
  }
}
