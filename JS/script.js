import ScrollSuave from './modules/scrollSuave.js';
import Accordion from './modules/accordion.js';
import Tabnav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import ScrollAnima from './modules/scroll-anima.js';
import MenuDropdown from './modules/menu-dropdown.js';
import MenuMobile from './modules/menu-mobile.js';
import Funcionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import SlideNav from './modules/slide.js';

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
fetchAnimais('../../animaisapi.json', '.numeros-grid');

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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const menuDropdown = new MenuDropdown('[data-dropdown]', ['touchstart', 'click']);
menuDropdown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]', ['click', 'touchstart']);
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');
