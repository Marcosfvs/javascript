function calcular() {

    var n = document.getElementById('num')
    var res = document.getElementById('res')
    var a = 1
    
    for (a ; a < 11; a++) {
    var s = a * n
    res.innerHTML = (`${a.value} * ${n.value} = ${s.value}`)
    }
}