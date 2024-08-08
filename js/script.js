// Declarando um array com 6 nomes de frutas:
let frutas = ["Maçã", "Banana", "Laranja", "Zimbro", "Uva", "Pera", "Jaca"];
// Mostra o array
console.log(frutas);
// Mostra o índice do array e o nome, como uma tabela
console.table(frutas);

// Visualizando o conteúdo do array
console.log(frutas[0]);

// Verificando o tamanho do array
console.log("Tamanho do array: ",frutas.length);

// Percorrer todo o array utilizando um LOOP
//For tradicional: uso de índice
console.log("==========Loop: for tradicional==========")
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log("==========Loop: for of==========")
// Percorrer todo o array utilizando o loop for of: uso de variável
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("==========Loop: for in==========")
// Percorrer todo o array utilizando o loop for in: retorna o índice do array
for (let i in frutas) {
    console.log(i);
}

//// Para mostrar o índice e a fruta:
// for (let i in frutas) {
//     console.log(i, frutas[i]);
// }


console.log("==========Loop: for each==========")
// Percorrer todo o array utilizando o loop for each: bom para preenchimento de listas, elementos, leitura e percorrer os elementos
// Não é bom para comparações
frutas.forEach(function(fruta){
    console.log("Item: ", fruta)
});

////////
// console.log("==========Loop: for each==========")
// // Percorrer todo o array utilizando o loop for each
// frutas.forEach(function(f, indice){
//     console.log("Item: ", indice, f)
// });
////////

////////
// console.log("==========Loop: for each==========")
// frutas.forEach(function(fruta, indice, array){
//     console.log("Item: ", indice, fruta)
// });

// // Percorrer string utilizando um loop
// let frase = "Hoje acordei feliz da vida!";
// for (let i = 0; i < frase.length; i++) {
//     console.log(frase[i]);
// }
////////

////////
// document.getElementById("btnAdd").addEventListener("click", ()=>{
//     console.log(this.textContent);
// })
////////


// Recuperar a lista ul que está no HTML de id 'lista'
let lista = document.getElementById("lista");


document.getElementById("btnAdd").addEventListener("click", ()=>{
    //Recuperando o input onde o nome da fruta é digitado
    let inputFruta = document.getElementById("idFruta");

    // Passando o valor digitado no campo para o método PUSH()
    // frutas.push(inputFruta.value); //Insere no final da lista
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
    // Recuperando o input onde o nome da fruta é digitado
    let inputFruta = document.getElementById("idFruta");

    // Passando o valor digitado no campo para o método indexOf para decobrir indice do elemento
    let indice = frutas.indexOf(inputFruta.value);
    if (indice > -1) {
        frutas.splice(indice, 1);
        renderizaLista();
    } else {
        alert("Item não existe na lista!");
    }
    inputFruta.value = "";
});

document.getElementById("btnOrdem").addEventListener("click", () => {
    frutas.sort(); //Coloca em ordem alfabética
    renderizaLista();
});

document.getElementById("btnReverte").addEventListener("click", () => {
    frutas.reverse();//Reverte a ordem atual
    renderizaLista();
});



function renderizaLista(){
    lista.innerHTML = "";
    frutas.forEach(fruta =>{
        //Criando elementos li para adicionar na lista
        let elementoLi = document.createElement("li");
        //Criando texto para adicionar no elemento li
        elementoLi.textContent = fruta;
        //Adicionar o elemento li na lista
        lista.appendChild(elementoLi);
    });   
}

renderizaLista();