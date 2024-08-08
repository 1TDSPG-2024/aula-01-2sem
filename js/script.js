// Criando um array com 6 nomes de frutas
let frutas = ["Maçã", "Banana", "Laranja", "Morango", "Uva", "Pera", "Jaca"];
console.log(frutas);
console.table(frutas);
console.log(frutas[0]);

console.log("Tamanho do Array: ", frutas.length);

// Percorrendo todo o array utilizando um LOOP
console.log("==============LOOP FOR TRADICIONAL==============");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log("==============LOOP FOR OF==============");
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("==============LOOP FOR IN==============");
for (let i in frutas) {
    console.log(i);
}

// ForEach não para com continue, break...
console.log("==============LOOP FOR EACH==============");
frutas.forEach(function(f, indice, array){
    console.log("ITEM", indice, f)
});

// Recuperar a lista ul que está no HTML de id 'lista'
let lista = document.getElementById("lista");


document.getElementById("btnAdd").addEventListener("click", ()=>{
    // Recuperando o input onde o nome da fruta é digitado
    let inputFruta = document.getElementById("idFruta");

    // Passando o valor digitado no campo para o método push()
    frutas.push(inputFruta.value); // Método que coloca o valor do input no final da lista
    // frutas.unshift(inputFruta.value); // Esse método inseri o valor no início da lista, não no final
    renderizaLista();
    inputFruta.value = "";
});

// document.getElementById("btnDel").addEventListener("click", () => {
//     frutas.pop(); //Remove um item do final da lista.
//     // frutas.shift(); //Remove um item do início da lista.
//     renderizaLista();
// });

document.getElementById("btnDel").addEventListener("click", () => {
    //Recuperando o input onde o nome da fruta é digitado.
    let inputFruta = document.getElementById("idFruta");
 
    //Passando o valor digitado no campo para o método indexOf para decobrir indice do elemento.
    let indice = frutas.indexOf(inputFruta.value);
    if (indice > -1) {
        frutas.splice(indice, 1);
        renderizaLista();
    } else {
        alert("Item não existe na lista!")
    }
    inputFruta.value = "";
});


document.getElementById("btnOrdem").addEventListener("click", () => {
    frutas.sort(); // Ordena em ordem alfabética
    renderizaLista();
});

document.getElementById("btnReverte").addEventListener("click", () => {
    frutas.reverse();//Reverte a ordem atual.
    renderizaLista();
});

function renderizaLista(){
    lista.innerHTML = ""
    frutas.forEach(fruta => {
        // Criando elementos li para adicionar na lista
        let elementoLi = document.createElement("li");
        // Criando texto para adicionar no elemento li
        elementoLi.textContent = fruta;
        // Adicionar o elemento li na lista
        lista.appendChild(elementoLi)
    })
}

renderizaLista();