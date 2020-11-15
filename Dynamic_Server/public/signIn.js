const $signInForm = $('#signInForm')
$signInForm.on('submit', (e) => {
  e.preventDefault()
  const name = $signInForm.find('input[name = name]').val()
  const password = $signInForm.find('input[name = password]').val()

  $.ajax({
    method: "POST",
    url: '/signIn',
    contentType: 'text/json; charset=UTF-8',
    data:JSON.stringify({name, password})
  }).then(()=>{
    alert('Login Successfully.')
    location.href = '/home.html'
  }, ()=> {})
})