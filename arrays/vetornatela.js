let valores = [8, 1, 7, 4, 2, 9]
/*
for(pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

/* for simplificado utilizando 'in':
para(for) cada posição dentro(in) de num(variavel composta)
    eu vou mostrar(console.log) a posição de cada num(num pos)
*/
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

