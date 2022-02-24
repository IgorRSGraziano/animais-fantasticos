export default class ToolTip {
    constructor(tooltips) {
        this.toolTips = document.querySelectorAll(tooltips)

        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onMouseOver = this.onMouseOver.bind(this)
        this.onMouseMove = this.onMouseMove.bind(this)
    }

    toolTipBoxCreate(element) {
        const toolTipBox = document.createElement('div')
        const text = element.getAttribute('aria-label')

        toolTipBox.classList.add('tooltip')
        toolTipBox.innerText = text
        document.body.appendChild(toolTipBox)

        this.toolTipBox = toolTipBox
    }

    onMouseMove(event) {
        this.toolTipBox.style.top = `${event.pageY + 20}px`;
        if (event.pageX + 240 > window.innerWidth) {
            this.toolTipBox.style.left = `${event.pageX - 190}px`;
        } else {
            this.toolTipBox.style.left = `${event.pageX + 20}px`;
        }
    }

    onMouseLeave({ currentTarget }) {
        this.toolTipBox.remove();
        currentTarget.removeEventListener('mouseover', this.onMouseLeave)
        currentTarget.removeEventListener('mousemove', this.onMouseMove)
    }


    onMouseOver(event) {
        this.toolTipBoxCreate(event.currentTarget)

        event.currentTarget.addEventListener('mouseleave', this.onMouseLeave)
        event.currentTarget.addEventListener('mousemove', this.onMouseMove)
    }

    addTooltipsEvent() {
        this.toolTips.forEach(item => {
            item.addEventListener('mouseover', this.onMouseOver)
        })
    }

    init() {
        if (this.toolTips.length) {
            this.addTooltipsEvent()
        }
        return this
    }
}