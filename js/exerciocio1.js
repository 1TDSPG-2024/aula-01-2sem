let nomes = []
console.log(nomes);
console.table(nomes);

let lista = document.getElementById("lista")

document.getElementById("btnAdd").addEventListener("click", () => {
    let inputNome = document.getElementById("idNome")

    nomes.unshift(inputNome.value);
    renderizaLista();
    inputNome.value = ""

})

document.getElementById("btnOrdena").addEventListener("click", () => {
    nomes.sort();
    renderizaLista();
})

document.getElementById("btnReverte").addEventListener("click", () => {
    nomes.reverse();
    renderizaLista();
})


function renderizaLista() {
    lista.innerHTML = "";
    nomes.forEach(nome => {
        let elementoLi = document.createElement("li");
        elementoLi.textContent = nome;
        lista.appendChild(elementoLi);
    });
}

renderizaLista();