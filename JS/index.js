function verificar() {
  //alert('ok')
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('textano')
  var res = document.getElementById('res')





 if (fano.value.length == 0) {
      window.alert('[ERRO] o campo de ano está em branco')
  } else if (Number(fano.value) > ano) {
      window.alert('[ERRO] O ano precisa ser anterior ao atual')
  } else {
      //window.alert('Ok')
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = window.document.getElementById('foto')




     if (fsex[0].checked) {
          genero = 'homem'
          res.innerHTML = 'Detectamos uma ' + genero + ' com ' + idade + ' anos.<br>'
          if (idade >=0 && idade < 10) {
              img.setAttribute('src', 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
          } else if (idade < 21) {
              img.setAttribute('src', 'https://images.pexels.com/photos/6321691/pexels-photo-6321691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
          } else if (idade < 50) {
              img.setAttribute('src', 'https://images.pexels.com/photos/4939815/pexels-photo-4939815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
          } else {
              img.setAttribute('src', 'https://images.pexels.com/photos/9587154/pexels-photo-9587154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
          }
      } else if (fsex[1].checked) {
          genero = 'mulher'
          res.innerHTML = 'Detectamos uma ' + genero + ' com ' + idade + ' anos.<br>'
          if (idade >=0 && idade < 10) {
              img.setAttribute('src', 'https://images.pexels.com/photos/936120/pexels-photo-936120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
          } else if (idade < 21) {
              img.setAttribute('src', 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
          } else if (idade < 50) {
              img.setAttribute('src', 'https://images.pexels.com/photos/725458/pexels-photo-725458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
          } else {
              img.setAttribute('src', 'https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
          }
      }
      res.innerHTML = "Detectamos " + genero + " com " + idade + " anos.<br>"
      res.appendChild(img)
  }
}



