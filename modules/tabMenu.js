//Realiza a navegação pelo itens clicando nas fotos, e mostrando o conteúdo de acordo
export default function initTabMenu() {
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