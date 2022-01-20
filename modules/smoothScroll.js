//Após clicar em algum link interno no menu, irá realizar um scroll para o local em que ele foi designado de forma suave
export default function initSmoothScroll() {
    //Seleciona todos elementos 'a' do '[data-menu='smooth']' que o href comece com '#'
    const linksInternos = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]')
    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}