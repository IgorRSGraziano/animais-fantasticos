import SmoothScroll from './smoothScroll.js';
import AnimationScroll from './animationScroll.js'
import Accordion from './accordion.js'
import TabMenu from './tabMenu.js'
import Modal from './modal.js'
import Tooltip from './toolTip.js'
import DropdownMenu from './dropdownMenu.js'
import MenuMobile from './menuMobile.js'
import initOpeningHours from './openingHours.js'
import initFetchAnimals from './fetchAnimals.js'
import initFetchBitcoin from './fetchBitcoin.js'

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]')
smoothScroll.init()

const accordion = new Accordion('[data-effect="accordion"] dt')
accordion.init()

const tabMenu = new TabMenu('[data-animals="list"] li', '[data-tab="menu"] section')
tabMenu.init()

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]')
modal.init()

const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()

const animationScroll = new AnimationScroll('[data-anime="scroll"]')
animationScroll.init()

const dropdownMenu = new DropdownMenu('[data-dropdown]')
dropdownMenu.init()

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]')
menuMobile.init()

initOpeningHours()
initFetchAnimals()
initFetchBitcoin()