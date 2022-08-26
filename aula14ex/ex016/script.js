function calcular(){
    var comeco = document.getElementById('inicio')
    var final = document.getElementById('fim')
    var pulo = document.getElementById('passo')
    var solucao = document.getElementById('res')
    if (comeco.value.length == 0 || final.value.length == 0 || pulo.value.length == 0){
        solucao.innerHTML = `Impossivel contar...`
    }else{
        var inicio = Number(comeco.value)
        var fim = Number(final.value)
        var passo = Number(pulo.value)
        if (passo <= 0 ){
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        if (inicio < fim){
            for (var c = inicio ; c <= fim ; c += passo){
                solucao.innerHTML += `${c} \u{1F601}`
            }
            solucao.innerHTML += ` \u{1F973}`
        }else {
            for (var c = inicio ; c >= fim ; c -= passo){
                solucao.innerHTML += `${c} \u{1F601}`
            }
            solucao.innerHTML += ` \u{1F973}`
        }
    }
}