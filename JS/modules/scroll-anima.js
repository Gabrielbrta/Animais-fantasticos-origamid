export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.activeClass = 'active';

    this.animateScroll = this.animateScroll.bind(this);
  }

  animateScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.windowMetade) < 0;
      if (isSectionVisible) {
        section.classList.add(this.activeClass);
      } else if (section.classList.contains(this.activeClass)) {
        section.classList.remove(this.activeClass);
      }
    });
  }

  init() {
    this.animateScroll();
    window.addEventListener('scroll', this.animateScroll);
  }
}
