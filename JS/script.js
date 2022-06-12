import ScrollSuave from './modules/scrollSuave.js';
import Accordion from './modules/accordion.js';
import Tabnav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initMenuDropdown from './modules/menu-dropdown.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimateScroll from './modules/animate-scroll.js';

const scrollSuave = new ScrollSuave('[data-menu="list"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('.js-accordion dt');
accordion.init();

const tabNav = new Tabnav('[data-tabnav="nav"] li', '[data-tab="content"] section');
tabNav.init();

initModal();
initTooltip();
initMenuDropdown();
initMenuMobile();
initFetchAnimais();
initFuncionamento();
initFetchBitcoin();
initAnimateScroll();
