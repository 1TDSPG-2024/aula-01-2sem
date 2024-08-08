//criando um array de frutas:
let frutas = ["Maça", "Banana", "Laranja", "Morango", "Uva", "Pera"]
console.log(frutas)
console.table(frutas);

console.log(frutas[0])

console.log("Tamanho Array", frutas.length)

console.log("==================LOOP FOR TRADICIONAL==============")
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

console.log("==================LOOP FOR OF==============")
for (let fruta of frutas){
    console.log(fruta)
}

console.log("==================LOOP FOR IN==============")
for (let i in frutas){
    console.log(i, frutas[i])
}

console.log("====================LOOP FOR EACH======================");
//Percorrer todo o array utilizando o LOOP FOR EACH
frutas.forEach(function (f, indice, array) {
    console.log("ITEM", indice, f);
});

//Recuperar a lista ul que está no HTML de id 'lista'.
let lista = document.getElementById("lista")

document.getElementById("btnAdd").addEventListener("click", ()=>{
    let inputFruta = document.getElementById("idFruta");
    frutas.unshift(inputFruta.value);
    renderizaLista();
    inputFruta.value = "";
})

document.getElementById("btnDel").addEventListener("click",()=>{
    let inputFruta = document.getElementById("idFruta");

    let indice = frutas.indexOf(inputFruta.value)
    if (indice > -1) {
        frutas.splice(indice, 1);
        renderizaLista()
    }
    else{
        alert("Fruta não encontrada");
    }
    inputFruta.value = "";
})

document.getElementById("btnOrdem").addEventListener("click", ()=>{
    frutas.sort()
    renderizaLista()
})

document.getElementById("btnReverte").addEventListener("click", ()=>{
    frutas.reverse()
    renderizaLista()
})

function renderizaLista() {
    lista.innerHTML = "";
    frutas.forEach(fruta => {
        //Criando elementos li para adicionar na lista.
        let elementoLi = document.createElement("li");
        //Criando texto para adicionar no elemento li.
        elementoLi.innerText = fruta;
        //Adicionar o elemento li na lista.
        lista.appendChild(elementoLi);
    });
}

renderizaLista();

