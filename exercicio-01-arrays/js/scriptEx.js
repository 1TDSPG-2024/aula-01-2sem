let nomes = []
let lista = document.getElementById("lista")
let input = document.getElementById("idNome")

function atualiza_pagina (){
    lista.innerHTML = ""
    nomes.forEach(function(nome){
        let liLista = document.createElement("li");
        liLista.innerHTML = nome;
        lista.appendChild(liLista)
    })
}

document.getElementById("btnAdd").addEventListener("click", ()=>{
    let input = document.getElementById("idNome");
    nomes.unshift(input.value);
    atualiza_pagina()
    input.value = ""
})

document.getElementById("btnOrdem").addEventListener("click", ()=>{
    nomes.sort();
    atualiza_pagina()

})

document.getElementById("btnReverte").addEventListener("click", ()=>{
    nomes.reverse();
    atualiza_pagina()

})