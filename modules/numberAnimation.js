export default function numberAnimation() {


    function animateNumber() {
        const numbers = document.querySelectorAll('[data-numero')

        numbers.forEach(number => {
            const total = +number.innerText
            const increment = Math.floor(total / 100)

            let start = 0
            const timer = setInterval(() => {
                start += increment

                number.innerText = start
                if (start > total) {
                    number.innerText = total
                    clearInterval(timer)
                }
            }, 25 * Math.random())
        })
    }

    let observer

    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('ativo')) {
            observer.disconnect()
            animateNumber()
        }
    }


    const observerTarget = document.querySelector('.numeros')
    observer = new MutationObserver(handleMutation)

    observer.observe(observerTarget, { attributes: true })
}