import ScrollSuave from './modules/scrollSuave.js';
import Accordion from './modules/accordion.js';
import Tabnav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initMenuDropdown from './modules/menu-dropdown.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimateScroll from './modules/animate-scroll.js';

const scrollSuave = new ScrollSuave('[data-menu="list"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('.js-accordion dt');
accordion.init();

const tabNav = new Tabnav('[data-tabnav="nav"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initMenuDropdown();
initMenuMobile();
fetchAnimais('../../animaisapi.json', '.numeros-grid');
initFuncionamento();
initFetchBitcoin();
initAnimateScroll();
