import SmoothScroll from './smoothScroll.js';
import initAnimationScroll from './animationScroll.js'
import Accordion from './accordion.js'
import initTabMenu from './tabMenu.js'
import initModal from './modal.js'
import initToolTip from './toolTip.js'
import initDropdownMenu from './dropdownMenu.js'
import initMenuMobile from './menuMobile.js'
import initOpeningHours from './openingHours.js'
import initFetchAnimals from './fetchAnimals.js'
import initFetchBitcoin from './fetchBitcoin.js'

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]')
smoothScroll.init()

const accordion = new Accordion('[data-effect="accordion"] dt')
accordion.init()
aaaaaa
initTabMenu()
initAnimationScroll()
initModal()
initToolTip()
initDropdownMenu()
initMenuMobile()
initOpeningHours()
initFetchAnimals()
initFetchBitcoin()