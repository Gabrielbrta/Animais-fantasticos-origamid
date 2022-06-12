export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.active = 'active';
  }

  toggleDescription(item) {
    item.classList.toggle(this.active);
    item.nextElementSibling.classList.toggle(this.active);
  }
  //  adicionar eventos ao accordion

  addAcorddionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleDescription(item));
    });
  }
  //  iniciar a função

  init() {
    if (this.accordionList.length) {
      // ativar primeiro item
      this.toggleDescription(this.accordionList[0]);
      this.addAcorddionEvent();
    }
    return this;
  }
}
