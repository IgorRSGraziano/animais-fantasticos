// Após clicar em algum link interno no menu, irá realizar um scroll para o local em que ele foi designado de forma suave
export default class SmoothScroll {
    constructor(links, options) {
        this.internalLinks = document.querySelectorAll(links)

        // eslint-disable-next-line no-unused-expressions
        options === undefined ? this.options = { behavior: 'smooth', block: 'start' } : undefined

        this.scrollToSection = this.scrollToSection.bind(this)
    }

    scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView(this.options)
    }

    addLinkEvent() {
        this.internalLinks.forEach((link) => {
            link.addEventListener('click', (event) => {
                this.scrollToSection(event)
            })
        })
    }

    init() {
        this.addLinkEvent(this.links)
    }
}