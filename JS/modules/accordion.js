export default function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const active = 'active';

  function showDescription() {
    this.classList.toggle(active);
    this.nextElementSibling.classList.toggle(active);
  }

  if (accordionList.length) {
    accordionList[0].classList.add(active);
    accordionList[0].nextElementSibling.classList.add(active);

    accordionList.forEach((item) => {
      item.addEventListener('click', showDescription);
    });
  }
}
