
//Declarando um array com 6 nomes de frutas:
let frutas = ["maca", "banana", "Laranja", "zimbro", "uva", "pera", "jaca"]
console.log(frutas);
console.table(frutas);

//visualizando o conteudo do array
console.log(frutas[0]);

//verificando o tamanho do array
console.log("TAMANHO DO ARRAY",frutas.length);

//percorrer todo o array utilizando um loop
console.log("===================LOOP FOR TRADICIONAL==================")
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log("==================LOOP FOR OF====================")
//percorrer todo o array utilizando o loop for of
for (let fruta of frutas){
    console.log(fruta);
}

console.log("==================LOOP FOR IN====================")
//percorrer todfo o array utilizando o loop for in
for (let i in frutas){
    console.log(i);
}

console.log("==================LOOP FOR EACH=================")
//percorrer todo o array  utilizando o loop for each
frutas.forEach(function(f,indice,array){
    console.log("ITEM",indice,f);
});

// let frase = "hoje acordei feliz da vida vai curinthia";
// //percorrer string utilizando um loop
// for (let i = 0; < frase.length; i++){
//     console.log(frase[i]);
// };

// document.getElementById("btnAdd").addEventListener("click", function(){
//     this.textContent
// });

//recuperar a lista ul que esta no html de id 'lista'.
let lista = document.getElementById("lista");

frutas.forEach(fruta=>{
    //criando elementos li para adicionar na lista.
    let elementoLi = document.createElement("li");
    //Criando texto para adicionar ao elemento li.
    elementoLi.textContent = fruta;
    //adicionar o elemento li na lista.
    lista.appendChild(elementoLi);
});


document.getElementById("btnAdd").addEventListener("click",()=>{

});












