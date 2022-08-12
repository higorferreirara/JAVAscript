function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var clas = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            clas = 'um'
            if (idade >= 0 && idade < 13){
                img.setAttribute('src', 'imagem/bebehomem.png')
            } else if (idade < 25){
                img.setAttribute('src', 'imagem/jovemhomem.png')
            }else if (idade < 55){
                img.setAttribute('src', 'imagem/adultohomem.png')
            }else {
                img.setAttribute('src', 'imagem/idosohomem.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            clas = 'uma'
            if (idade >= 0 && idade < 13){
                img.setAttribute('src', 'imagem/bebemulher.png')
            } else if (idade < 25){
                img.setAttribute('src', 'imagem/jovemmulher.png')
            }else if (idade < 55){
                img.setAttribute('src', 'imagem/adultomulher.png')
            }else {
                img.setAttribute('src', 'imagem/idosomulher.png')                   
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${clas} ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 
}