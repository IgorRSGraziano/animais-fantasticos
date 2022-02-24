import NumberAnimation from './numberAnimation.js'

export default function initFetchAnimals() {
    async function fetchAnimals(url) {
        const animalsResponse = await fetch(url)
        const animalsJSON = await animalsResponse.json()
        const numberGrid = document.querySelector('.numeros-grid')

        function createAnimal(animal) {
            const div = document.createElement('div')
            div.classList.add('numero-animal')

            div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`

            return div
        }

        animalsJSON.forEach(animal => {
            const divAnimal = createAnimal(animal)

            numberGrid.appendChild(divAnimal)
        })

        const numberAnimation = new NumberAnimation('[data-numero]', '.numeros', 'ativo')
        numberAnimation.init()

    }

    fetchAnimals('./animaisapi.json')
}