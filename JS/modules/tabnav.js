export default function initTabnav() {
  const sections = Array.from(document.querySelectorAll('.animais-descricao section'));
  const tabNav = Array.from(document.querySelectorAll('.js-tabnav li'));

  const showDown = 'show-down';
  const showRight = 'show-right';

  tabNav[0].classList.add(showDown);
  sections[0].dataset.anime = showDown;
  sections[0].classList.add(showDown);

  function indexImg(index) {
    const insertShowRight = sections[index].dataset.anime = showRight;
    const insertShowDown = sections[index].dataset.anime = showDown;

    sections.forEach((section) => {
      section.classList.remove(insertShowDown, insertShowRight);
      sections[index].classList.add(insertShowRight);
      delete section.dataset.anime;

      if (index > 2) {
        sections[index].dataset.anime = showRight;
      } else {
        sections[index].classList.remove(insertShowRight, insertShowDown);
        sections[index].classList.add(insertShowDown);
        sections[index].dataset.anime = showDown;
      }
    });
  }
  if (sections.length && tabNav.length) {
    tabNav.forEach((item, index) => {
      item.addEventListener('click', () => {
        indexImg(index);
      });
    });
  }
}
