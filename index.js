
const formPesquisa = document.querySelector('form')
apiKey = ''
formPesquisa.onsubmit = (ev) => {
    ev.preventDefault()


    const pesquisa = ev.target.pesquisa.value

    if(pesquisa =="") {
        alert('Campo invalido!!')
    } else {
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}]&s=${pesquisa}        `)
        .then(res => res.json())
        .then(json => console.log(json))
    } 
    const carregarLista = (json) => {
        const lista = document.querySelector("div.lista")
        lista.innerHTML = ""

        json.search.forEach(element => {
            console.log(element)

            let item = document.createElement('div')
            item.classList.add('item')
    
            item.innerHTML = ` <h2> ${element.Title}</h2><img src="${element.Poster}"/>`
    
            lista.appendChild(item)
        });


    }
}