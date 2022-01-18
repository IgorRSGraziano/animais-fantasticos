//Funções e variáveis

function initTabMenu() {
    const tabMenu = document.querySelectorAll('[data-animals="list"] li')
    const tabContent = document.querySelectorAll('[data-tab="menu"] section')
    tabContent[0].classList.add('ativo')

    //Verifica se os itens existem para realizar a manipulação
    if (!!tabMenu.length && !!tabContent.length) {
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo')
            })
            const data = tabContent[index].dataset.anime
            tabContent[index].classList.add('ativo', data)
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}

function initAccordion() {
    const accordionList = document.querySelectorAll('[data-effect="accordion"] dt')

    function activeAccordion() {
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
    }

    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion)
    })
}

//Após clicar em algum link interno no menu, irá realizar um scroll para o local em que ele foi designado de forma suave
function initSmoothScroll() {
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

//Gera a animação de itens "aparecendo" no site no decorrer que a pessoa vai descendo a tela
function initAnimacaoScroll() {
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


//Execução
initAnimacaoScroll()
initSmoothScroll()
initAccordion()
initTabMenu()

//Exercicios

// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.


// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.