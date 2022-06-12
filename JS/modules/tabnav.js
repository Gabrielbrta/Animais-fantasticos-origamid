export default class Tabnav {
  constructor(menu, content) {
    this.sections = Array.from(document.querySelectorAll(content));
    this.tabNav = Array.from(document.querySelectorAll(menu));
    this.activeClass = 'active';
  }

  // ativa a tab de acordo com o index da mesma
  activeTab(index) {
    this.sections.forEach((section) => {
      section.classList.remove(this.activeClass);
      section.dataset.anime = '';
    });
    const direcao = this.sections[index].dataset.anime = 'show-right';
    this.sections[index].classList.add(this.activeClass, direcao);
  }

  // adiciona evento nas tabs

  addEventTab() {
    this.tabNav.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabNav.length && this.sections.length) {
      // ativar primero item
      this.activeTab(0);
      this.addEventTab();
    }
    return this;
  }
}
