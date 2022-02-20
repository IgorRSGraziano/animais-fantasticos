// Gera a animação de itens "aparecendo" no site no decorrer que a pessoa vai descendo a tela
export default function initAnimationScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]')
    const windowHeight = window.innerHeight * 0.6
    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top
            if (sectionTop < windowHeight) {
                section.classList.add('ativo')
            } else if (section.classList.contains('ativo')) {
                section.classList.remove('ativo')
            }
        })
    }


    if (sections.length) {
        animaScroll()
        window.addEventListener('scroll', animaScroll)
    }
}