//Gera a animação de itens "aparecendo" no site no decorrer que a pessoa vai descendo a tela
export default function initAnimationScroll() {
    const section = document.querySelectorAll('[data-anime="scroll"]')
    if (section.length) {
        const windowHeight = window.innerHeight * 0.6

        function animaScroll() {
            section.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top
                if (sectionTop < windowHeight) {
                    section.classList.add('ativo')
                }
            })
        }
        animaScroll()

        window.addEventListener('scroll', animaScroll)
    }
}