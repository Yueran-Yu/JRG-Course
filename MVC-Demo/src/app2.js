import './app2.css'
import Vue from "vue";

const localKey = 'app2.index'

const init = (el) => {
    const m = {
        get() {
            return parseInt(localStorage.getItem(localKey)) || 0
        },
        set(index) {
            localStorage.setItem(localKey, index.toString())
        }
    }
    new Vue({
        el: el,
        data: {
            index: m.get()
        },
        watch: {
            index() {
                m.set(this.index)
            }
        },
        template: `
          <section id="app2">
          <ol class="tab-bar">
            <li :class="index === 0 ? 'selected':''" @click="index=0">Column 1</li>
            <li :class="index === 1 ? 'selected':''" @click="index=1">Column 2</li>
          </ol>
          <ol class="tab-content">
            <li :class="index === 0 ? 'active':''">Content 1</li>
            <li :class="index === 1 ? 'active':''">Content 2</li>
          </ol>
          </section>`
    })
}
export default init
