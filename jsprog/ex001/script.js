function enviar () {
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')
    let nt = document.getElementById('notas')

    res.innerHTML= ''
    
    if(Number(num.value) < 1 || Number(num.value) > 10) {
        res.innerHTML += 'Você digitou um valor inválido, digite novamente!'
    } else {
        res.innerHTML += 'Valor correto!'
        let item = document.createElement('option')
        item.text =`Nota ${num.value}`
        nt.appendChild(item)
        
    }
}