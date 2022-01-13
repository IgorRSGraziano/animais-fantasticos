function initTabMenu() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabmenu-content section')
    tabContent[0].classList.add('ativo')

    //Verifica se os itens existem para realizar a manipulação
    if (!!tabMenu.length && !!tabContent.length) {
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}

initTabMenu()

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')

    function activeAccordion() {
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
    }

    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion)
    })
}

initAccordion()


//Após clicar em algum link interno no menu, irá realizar um scroll para o local em que ele foi designado de forma suave
function initSmoothScroll() {
    //Seleciona todos elementos 'a' do '.js-menu' que o href comece com '#'
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
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

initSmoothScroll()

//Gera a animação de itens "aparecendo" no site no decorrer que a pessoa vai descendo a tela
function initAnimacaoScroll() {
    const section = document.querySelectorAll('.js-scroll')
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

initAnimacaoScroll()