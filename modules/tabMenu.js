// Realiza a navegação pelo itens clicando nas fotos, e mostrando o conteúdo de acordo
export default class TabMenu {
    constructor(menu, content) {
        this.tabMenu = document.querySelectorAll(menu)
        this.tabContent = document.querySelectorAll(content)

        this.activeClass = 'ativo'
    }

    activeTab(index) {
        this.tabContent.forEach((section) => {
            section.classList.remove(this.activeClass)
        })
        const data = this.tabContent[index].dataset.anime
        this.tabContent[index].classList.add(this.activeClass, data)
    }

    addTabMenuEvent() {
        this.tabMenu.forEach((menuItem, index) => {
            menuItem.addEventListener('click', () => this.activeTab(index))
        })
    }

    init() {
        if (this.tabContent && this.tabMenu) {
            this.activeTab(0)
            this.addTabMenuEvent()
        }
    }

}