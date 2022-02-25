import outsideClick from "./outsideclick.js";

export default class MenuMobile {
    constructor(menuButton, menuList, events) {

        this.menuButton = document.querySelector(menuButton)
        this.menuList = document.querySelector(menuList)
        this.activeClass = 'active'

        events ? this.events = events : this.events = ['touchstart', 'click']

        this.openMenu = this.openMenu.bind(this)
    }

    openMenu() {
        this.menuButton.classList.add(this.activeClass)
        this.menuList.classList.add(this.activeClass)
        outsideClick(this.menuList, this.events, () => {
            this.menuButton.classList.remove(this.activeClass)
            this.menuList.classList.remove(this.activeClass)
        })
    }

    addMenuMobileEvents() {
        this.events.forEach(userEvent => {
            this.menuButton.addEventListener(userEvent, this.openMenu)
        })
    }

    init() {
        console.log(this.menuButton && this.menuList)
        if (this.menuButton && this.menuList) {
            this.addMenuMobileEvents()
        }
    }
}