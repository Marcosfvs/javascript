function calcular() {

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
   //teste se o input ta vazio " cuidado ao escrever length"
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
        // se não vazio converte a string num em um número e cria a variavel c
    } else {        
        let n = Number(num.value)
        let c = 1
        // antes de pedir um novo numero deixa o select vazio
        tab.innerHTML = ''
        //repetição com option, vai entrar o select
        for (c ; c < 11; c++) {
            //cria a variavel item para adicionar ao option no select
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value =`tab${c}`
            //adiciona o item ao option no select
            tab.appendChild(item)  
        }         
    }
}