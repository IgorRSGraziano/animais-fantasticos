// Gera a animação de itens "aparecendo" no site no decorrer que a pessoa vai descendo a tela
export default class initAnimationScroll {
    constructor(sections) {
        this.sections = document.querySelectorAll(sections)
        this.windowHeight = window.innerHeight * 0.6

        this.checkDistance = this.checkDistance.bind(this)
    }

    getDistance() {
        this.distance = [...this.sections].map(section => {
            const offset = section.offsetTop
            return {
                element: section,
                offset: Math.floor(offset - this.windowHeight),
            }
        })
    }

    checkDistance() {
        this.distance.forEach(item => {
            if (window.pageYOffset > item.offset) {
                item.element.classList.add('ativo')
            } else if (item.element.classList.contains('ativo')) {
                item.element.classList.remove('ativo')
            }
        })
    }


    animaScroll() {
        this.sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top
            if (sectionTop < this.windowHeight) {
                section.classList.add('ativo')
            } else if (section.classList.contains('ativo')) {
                section.classList.remove('ativo')
            }
        })
    }

    init() {
        if (this.sections.length) {
            this.getDistance()
            this.checkDistance()
            window.addEventListener('scroll', this.checkDistance)
        }
        return this
    }
}