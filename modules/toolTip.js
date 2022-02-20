export default function initToolTip() {
    const toolTips = document.querySelectorAll('[data-tooltip]')

    function toolTipBoxCreate(element) {
        const toolTipBox = document.createElement('div')
        const text = element.getAttribute('aria-label')

        toolTipBox.classList.add('tooltip')
        toolTipBox.innerText = text
        document.body.appendChild(toolTipBox)

        return toolTipBox
    }

    const onMouseMove = {
        handleEvent(event) {
            this.toolTipBox.style.top = `${event.pageY + 20}px`;
            this.toolTipBox.style.left = `${event.pageX + 20}px`;

        }
    }

    const onMouseLeave = {
        handleEvent() {
            this.toolTipBox.remove();
            this.element.removeEventListener('mouseover', onMouseLeave)
            this.element.removeEventListener('mousemove', onMouseMove)

        }
    }


    function onMouseOver() {
        const toolTipBox = toolTipBoxCreate(this)

        onMouseMove.toolTipBox = toolTipBox
        onMouseLeave.toolTipBox = toolTipBox
        onMouseLeave.element = this

        this.addEventListener('mouseleave', onMouseLeave)
        this.addEventListener('mousemove', onMouseMove)
    }

    toolTips.forEach(item => {
        item.addEventListener('mouseover', onMouseOver)
    })
}