const formPesquisa = document.querySelector('form')
apiKey = '786648c2'

formPesquisa.onsubmit = (ev) => {
    ev.preventDefault()
    const pesquisa = ev.target.pesquisa.value

    if(pesquisa ==="") {
        alert('Campo invalido!!')
    } else {
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${pesquisa}`)
        .then(res => res.json())
        .then(json => carregarLista(json))
    }   
}

const carregarLista = (json) => {
    const lista = document.querySelector("div.lista");
    lista.innerHTML = "";

        json.Search.forEach(element => {
            let item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `<img src="${element.Poster}"/>`;
            lista.appendChild(item);
        });

};
