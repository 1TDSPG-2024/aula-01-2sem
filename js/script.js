//Declarando um array com 6 nomes de frutas:
let frutas = ["Maçã", "Banana", "Laranja", "Zimbro", "Uva", "Pera", "Jaca"];
console.log(frutas);
console.table(frutas);

//Visualizando o conteúdo do array
console.log(frutas[0]);

//Verificando o tamanho do Array
console.log("TAMANHO DO ARRAY", frutas.length);

//Percorrer todo o array utilizando um LOOP
console.log("====================LOOP FOR TRADICIONAL======================");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log("====================LOOP FOR OF======================");
//Percorrer todo o array utilizando o LOOP FOR OF
for (let f of frutas) {
    console.log(f);
}

console.log("====================LOOP FOR IN======================");
//Percorrer todo o array utilizando o LOOP FOR IN
for (let i in frutas) {
    console.log(i, frutas[i]);
}

console.log("====================LOOP FOR EACH======================");
//Percorrer todo o array utilizando o LOOP FOR EACH
frutas.forEach(function (f, indice, array) {
    console.log("ITEM", indice, f);
});

// let frase = "Hoje acordei feliz da vida o curinthia ganho!!!";
// //Percorrer string utilizando um LOOP
// console.log("====================LOOP FOR TRADICIONAL======================");
// for (let i = 0; i < frase.length; i++) {
//     console.log(frase[i]);
// }

// document.getElementById("btnAdd").addEventListener("click", ()=>{
//     console.log(this.textContent);
// });

//Recuperar a lista ul que está no HTML de id 'lista'.
let lista = document.getElementById("lista");


document.getElementById("btnAdd").addEventListener("click", () => {
    //Recuperando o input onde o nome da fruta é digitado.
    let inputFruta = document.getElementById("idFruta");

    //Passando o valor digitado no campo para o método PUSH()
    // frutas.push(inputFruta.value);Insere no final da lista
    frutas.unshift(inputFruta.value);//Insere no início da lista
    renderizaLista();
    inputFruta.value = "";
});

// document.getElementById("btnDel").addEventListener("click", () => {
//     // frutas.pop();//Remove um item do final da lista.
//     frutas.shift();//Remove um item do início da lista.
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
        alert("ITEM NÃO EXISTE NA LISTA!");
    }
    inputFruta.value = "";
});


document.getElementById("btnOrdem").addEventListener("click", () => {
    frutas.sort();//Coloca em ordem alfabética
    renderizaLista();
});

document.getElementById("btnReverte").addEventListener("click", () => {
    frutas.reverse();//Reverte a ordem atual.
    renderizaLista();
});



function renderizaLista() {
    lista.innerHTML = "";
    frutas.forEach(fruta => {
        //Criando elementos li para adicionar na lista.
        let elementoLi = document.createElement("li");
        //Criando texto para adicionar no elemento li.
        elementoLi.textContent = fruta;
        //Adicionar o elemento li na lista.
        lista.appendChild(elementoLi);
    });
}

renderizaLista();