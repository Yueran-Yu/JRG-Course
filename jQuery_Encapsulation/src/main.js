/* const api = jQuery('.test') // not return elements, return api object
 api.addClass('red')  // 'this'  equals api
 .addClass('blue')
 .addClass('green')  //traverse the elements and add 'red' class
*/
//  obj.fn(p1) // when in a function 'this' equals obj
//  obj.fn.call(obj, p1)

// const api1 = jQuery('.test')

// const api2 = api1.find('.child').addClass('red')
// api1.addClass('green')


// jQuery('.test')
// .find('.child')
// .addClass('red')
// .addClass('green')
// .end()
// .addClass('blue')


// const x = jQuery('.test').find('.child')
const y = jQuery('.test').parent().print()

// console.log(x)


// x.each((element, i) => {console.log(element)})

const $div = $('<div>1</div>')
console.log($div)

// $div.appendTo(document.body)
