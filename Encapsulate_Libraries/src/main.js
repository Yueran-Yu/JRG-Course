const div= dom.create('<div>newDiv</div>')
console.log(div)
dom.after(test, div)

const div3 = dom.create('<div id="parent">new parent</div>')
dom.wrap(test, div3)

const nodes = dom.empty(window.empty)
console.log(nodes)