// declarando criando um array com 6 nomes de frutas
let frutas = ["maça","banana","laranja","morango","uva","pera","jaca"];
console.log(frutas);
console.table(frutas) // forma de tabela com indice  

// visualizando o conteúdo do array
console.log(frutas[0]);

// verificando o tamanho do array
console.log("tamanho do array",frutas.length);

// percorrer todo o array utilizando LOOP

// for tradicional percorre todo o array usando o indice 
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// LOOP for OF faz o mesmo que o tradicinal porém usa uma variavel 
for (let frutas of frutas) {
    console.log(frutas);
}

// LOOP for IN vai retornar o indice do array vereificação

for (let i in frutas){
    console.log(i);
}

// LOOP for EACH para preenchimento 
frutas.forEach(function(fruta, indice){
console.log("ITEM",indice,fruta);
} );


// recuperar a lista ul que esta no HTML do id ' lista'
let lista = document.getElementById("lista");

frutas.forEach(fruta =>{
// criando elementos li para adicionar na lista 
let elementoLi = document.createElement("li")
// criando texto para adicionar no elemento li
elementoLi.textContent = fruta;
// adicionar o elemento li na lista
lista.appendChild(elementoLi);

} )
// botão que adiciona 
  document.getElementById("btnadd").addEventListener("click", ()=>{
    // recuperando o input onde o nome da fruta é digitado
    let inputfruta = document.getElementById("idfruta");
    // passando o valor digitado no campo para o método PUSH()
    frutas.push(inputfruta.value); // insere no final da lista
    frutas.unshift(inputfruta.value); // insere no começo da lista
    renderizaLista();
 });
// botão que remove
/*  
 document.getElementById("btnDel").addEventListener("click", ()=>{
 // frutas.pop(); remove um item do final da lista 
 frutas.shift(); // remove um item do inicio da lista 
 renderizaLista(); 
})  */
 document.getElementById("btnDel").addEventListener("click", () => {
    //Recuperando o input onde o nome da fruta é digitado.
    let inputFruta = document.getElementById("idFruta");

    //Passando o valor digitado no campo para o método indexOf para decobrir indice do elemento.
    let indice = frutas.indexOf(inputFruta.value);
    if (indice > -1) {
        frutas.splice(indice, 1);
        renderizaLista();
    }else{
        alert("ITEM NÃO EXISTE NA LISTA!");
    }
    inputFruta.value = "";
});
// botão que ordena 
document.getElementById("btnOrdem").addEventListener("click", ()=>{
frutas.sort(); // coloca em ordem alfabética
renderizaLista();
})
// botão que reverte 
document.getElementById("btnReverse").addEventListener("click", ()=>{
frutas.reverse(); // reverte a ordem atual 
renderizaLista();
})

// função para renderizar a lista 
 function renderizaLista() {
    lista.innerHTML = "";
    frutas.forEach(fruta =>{
        // criando elementos li para adicionar na lista 
        let elementoLi = document.createElement("li")
        // criando texto para adicionar no elemento li
        elementoLi.textContent = fruta;
        // adicionar o elemento li na lista
        lista.appendChild(elementoLi);
    });    
}  

renderizaLista();