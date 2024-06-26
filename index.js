const search = document.getElementById('search')

search.addEventListener('click', () => {
    let input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'pesquisa')
    input.setAttribute('id', 'input')
    input.setAttribute('placeholder', 'series,filmes')

    let form = document.getElementById('form')
    form.appendChild(input)
  
})



// chamada Api
const formPesquisa = document.querySelector('form')
const hideContent = document.querySelectorAll(".hideContent")
//const bodyCabeçalho = document.getElementById("#corpo-cabeçalho")
apiKey = '786648c2'

formPesquisa.onsubmit = (ev) => {
    ev.preventDefault()
    const pesquisa = ev.target.pesquisa.value
    hideContent.forEach(hide => {
        hide.style.display = "none"
    }) 
    //bodyCabeçalho.style.background = 'url(img/img_9027.jpg)'
    //bodyCabeçalho.style.background = 'none'

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





