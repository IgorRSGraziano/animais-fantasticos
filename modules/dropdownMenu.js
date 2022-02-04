export default function dropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]')

    dropdownMenus.forEach(menu => {
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick)
        }
        )
    });

    function handleClick(event) {
        event.preventDefault()
        this.classList.add('ativo')
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('ativo')
        })
    }

    function outsideClick(element, events, callback) {
        const html = document.documentElement;
        const outside = 'data-outside'

        if (!element.hasAttribute(outside)) {
            events.forEach(userEvent => {
                html.addEventListener(userEvent, handleOutsideClick)
            })
            element.setAttribute(outside, '')
        }
        function handleOutsideClick(event) {
            if (!element.contains(event.target)) {
                element.removeAttribute(outside)
                events.forEach(userEvent => {
                    html.removeEventListener(userEvent, handleOutsideClick)
                })
                callback()
            }
        }
    }
}