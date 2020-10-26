const div= dom.create('<div>newDiv</div>')
console.log(div)
dom.after(test, div)

const div3 = dom.create('<div id="parent">new parent</div>')
dom.wrap(test, div3)
const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test,'title', 'Hi, I am Grace')
const attr1 = dom.attr(test, 'title')
dom.text(test, "This is a brand new content.")
dom.style(test, {border: '4px solid red', color:'green'})
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '5px dashed blue')

dom.class.add(test, 'red')
dom.class.remove(test, 'red')
console.log(dom.class.has(test, 'red'))

const fn = ()=> {console.log("this is the onclick event.")}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)

const testDiv = dom.find('#test2')[0]
console.log(testDiv)
console.log(dom.find('.red', testDiv)[0])

console.log(dom.parent(test))
const s2 = dom.find('#s2')[0]
console.log(dom.siblings(s2))
console.log(dom.next(s2))
console.log(dom.previous(s2))

const t = dom.find('#traverse')[0]
dom.each(dom.children(t), n=> dom.style(n, 'color', 'red'))
console.log(dom.index(s2))