let num = document.getElementById('txtn')
let lst = document.getElementById('lst')
let res = document.getElementById('res')
let bibl = []
    
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

    
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, bibl)) {
        bibl.push(Number(num.value))  

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        item.value = `${num}`
        lst.appendChild(item)
        res.innerHTML = ''      

    } else {
        window.alert('[ERRO] valor invalido ou adicionado na lista!')                   
    }

    //limpa a área de escrita
    num.value = ''
    num.focus()
}

function calcular(){
        if (bibl.length == 0) {
        window.alert('Adicione valores antes de finaliziar!')
    } else {
        let tot = bibl.length
        let maior = bibl[0]
        let menor = bibl[0]
        let soma = 0
        let media = 0


        for (let pos in bibl) {
            soma += bibl[pos]
            if (bibl[pos] > maior)
            maior = bibl[pos]
            if (bibl[pos] < menor)
            menor = bibl[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores informados é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores informados é ${Number(soma)/Number(tot)}</p>`      
    } 
    
    
    //res.innerHTML += `Soma dos valores`
    //res.innerHTML += `Média dos valores`
}