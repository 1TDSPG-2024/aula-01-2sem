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
    nomes.push(input.value);
    atualiza_pagina()
    input.value = ""
})

document.getElementById("btnDel").addEventListener("click", ()=>{
    let input = document.getElementById("idNome");

    let indice = nomes.indexOf(input.value)
    if (indice > -1){
        nomes.splice(input.value, 1);
        atualiza_pagina()
    }
    else{
        alert("Nome não encontrado")
    }
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