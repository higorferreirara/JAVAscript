function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minu = data.getMinutes()
    //var hora = 12
    msg.innerHTML = `Agora são ${hora}:${minu} horas.`

    if (hora >= 0 && hora < 12){
        img.src = 'imagem/dia1.png'
        document.body.style.background = '#edc28c'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'imagem/tarde1.png'
        document.body.style.background = '#c9d9e5'
    } else {
        img.src = 'imagem/noite1.png'
        document.body.style.background = '#0e132f'
    }
    //0e132f noite
    //c9d9e5 tarde
    //bfa799 dia
}