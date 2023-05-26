function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    // teste de se o input está vazio
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        //window.alert('[ERRO] faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        //mconverter o input para number
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //Se o passo for zero trava o navegador, considerou como 1 nesse caso
        if (p<= 0) {
            window.alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }
        if (i <f) {
            //contagem crescente
            for(let c = i; c <=f; c+= p){
            res.innerHTML += `${c} 👉 ` // usei o windows + . para achar esse emote
            }
            res.innerHTML += '\u{1F3C1}'
        } else{
            //contagem regressiva
            for(let c= i; c >=f; c -= p) {
                res.innerHTML += `${c} 👉 `
            }
            res.innerHTML += '\u{1F3C1}'
        }
    }  
}



