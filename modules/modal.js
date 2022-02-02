export default function initModal() {
    const btnOpen = document.querySelector('[data-modal="open"]')
    const btnClose = document.querySelector('[data-modal="close"]')
    const btnContainerModal = document.querySelector('[data-modal="container"]')
    console.log(btnClose, btnOpen, btnContainerModal)

    function modalToggle(event) {
        event.preventDefault()
        btnContainerModal.classList.toggle('ativo');
        console.log(btnContainerModal.classList)
    }
    function clickOutsideOfModal(event) {
        event.target === this ? modalToggle(event) : null
    }


    btnOpen.addEventListener('click', modalToggle)
    btnClose.addEventListener('click', modalToggle)
    btnContainerModal.addEventListener('click', clickOutsideOfModal)
} 