export default function initScrollSmooth() {
  const linksInternos = document.querySelectorAll('[data-tab="menu"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
  if (linksInternos) {
    linksInternos.forEach((item) => {
      item.addEventListener('click', scrollToSection);
    });
  }
}
