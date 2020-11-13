const $form = $('#registerForm')
$form.on('submit', (e) => {
  e.preventDefault()
  const name = $form.find('input[name = name]').val()
  const password = $form.find('input[name = password]').val()
  console.log(name, password);
  $.ajax({
    url: '/register',
    method: 'POST',
    contentType: 'text/json;charset=UTF-8',
    data: JSON.stringify({ name, password })
  }).then(
    ()=>{alert('Register Successfully.'),
        location.href = '/signIn.html'},
    ()=>{'Register Failed.',
    location.href = '/register.html'})
})

