function contar() {
    var sinc = document.getElementById('inc')
    var sfim = document.getElementById('fim')
    var spass = document.getElementById('pass')
    var sres = document.getElementById('res')

    for (sinc; sinc <= sfim; sinc = sinc + spass) {
        sres.innerHTML = `${sinc.value}`
    }     
}


