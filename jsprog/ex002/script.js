function entrar(){
    let nome = document.getElementById('nome')
    let senha = document.getElementById('senha')

    if (nome.value == senha.value) {
        window.alert('Sua senha não pode ser igual ao nome de usuário! Tente novamente!')
    } else {
        window.alert('Senha correta!')
    }
}