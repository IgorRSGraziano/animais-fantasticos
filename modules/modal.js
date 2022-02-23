export default class initModal {
    constructor(btnOpen, btnClose, modalContainer) {
        this.btnOpen = document.querySelector(btnOpen)
        this.btnClose = document.querySelector(btnClose)
        this.modalContainer = document.querySelector(modalContainer)

        this.eventToggleModal = this.eventToggleModal.bind(this)
        this.clickOutsideOfModal = this.clickOutsideOfModal.bind(this)

    }

    modalToggle() {
        this.modalContainer.classList.toggle('ativo');
    }

    eventToggleModal(event) {
        event.preventDefault()
        this.modalToggle()
    }

    clickOutsideOfModal(event) {
        event.target === this.modalContainer ? this.modalToggle(event) : null
    }

    addModalEvent() {
        this.btnOpen.addEventListener('click', this.eventToggleModal)
        this.btnClose.addEventListener('click', this.eventToggleModal)
        this.modalContainer.addEventListener('click', this.clickOutsideOfModal)
    }

    init() {
        this.addModalEvent()
    }
} 