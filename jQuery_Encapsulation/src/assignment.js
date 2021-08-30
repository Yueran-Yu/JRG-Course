window.jQuery = function(selectorOrArray){
  let elements
  if(typeof selectorOrArray === 'string'){
    elements = document.querySelectorAll(selectorOrArray)
  }else if(selectorOrArray instanceof Array){
    elements = selectorOrArray
  }


  return {
    addClass(className){
        for(let i = 0; i < elements.length; i++){
          elements[i].classList.add(className)
        }
        return this
    },
    find(selector){
       let array = []

       for(let i = 0; i < elements.length; i++){
         console.log(elements[i])
         const sub_elements = Array.from(elements[i].querySelectorAll(selector))
         array = array.concat(sub_elements)
       }
       console.log(this)
       array.oldApi = this
       return jQuery(array)
      },
      oldApi: selectorOrArray.oldApi
  }
}


window.$ = window.jQuery

$('#test').find('.child').addClass('red') // 请确保这句话成功执行