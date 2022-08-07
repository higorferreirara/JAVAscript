var agora = new Date()
var hora = agora.getHours()
console.log(`olá! são exatamanete ${hora}:00 horas`)
if (hora < 12){
    console.log('Bom dia!')
} else if (hora < 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}