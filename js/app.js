function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if (lista.textContent == '') {
        lista.textContent = amigo.Value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.Value;
    }
    amigo.value = '';
}