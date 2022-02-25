import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
    constructor(dropdownMenus, events) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenus)
        this.activeClass = 'ativo'

        events ? this.events = events : this.events = ['touchstart', 'click']


        this.activeDropDownMenu = this.activeDropDownMenu.bind(this)
    }

    activeDropDownMenu(event) {
        const element = event.currentTarget

        event.preventDefault()
        element.classList.add(this.activeClass)
        outsideClick(element, ['touchstart', 'click'], () => {
            element.classList.remove(this.activeClass)
        })
    }

    addDropdownMenusEvent() {
        this.dropdownMenus.forEach(menu => {
            this.events.forEach(userEvent => {
                menu.addEventListener(userEvent, this.activeDropDownMenu)
            }
            )
        });
    }

    init() {
        if (this.dropdownMenus.length) {
            this.addDropdownMenusEvent()
        }
        return this
    }
}