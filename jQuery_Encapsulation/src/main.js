const x1 = jQuery('.test').addClass('red').find('.child')
console.log('-------------------------------------')
console.log(x1)

const x2 = x1.addClass('blue')
console.log('##############################')
console.log(x2)

// x1.each((div, i)=>console.log(div))
x1.parent().print()
jQuery('.test').parent().print()

jQuery('.test').children().print()



