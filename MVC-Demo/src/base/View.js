import $ from 'jquery'
import EventBus from "./EventBus.js";

class View extends EventBus{
    constructor(options) {
        super() // EventBus#constructor()
        Object.assign(this, options)
        this.el = $(this.el)
        this.render(this.data) // view = render(data)
        this.autoBindEvents()
        this.on('m:updated', () => {
            this.render(this.data)
        })
    }
    autoBindEvents() {
        for (let key in this.events) {
            const value = this[this.events[key]]
            const spaceIndex = key.indexOf(' ')
            const click = key.slice(0, spaceIndex)
            const actionBtn = key.slice(spaceIndex + 1)
            this.el.on(click, actionBtn, value)
        }
    }
}

export default View