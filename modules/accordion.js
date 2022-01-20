//Faz o effeito Accordion, que esconde as resposta das perguntas frequentes, e quando a pessoa clica expande.
export default function initAccordion() {
    const accordionList = document.querySelectorAll('[data-effect="accordion"] dt')

    function activeAccordion() {
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
    }

    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion)
    })
}