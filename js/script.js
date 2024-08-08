let frutas = ["Maçã", "Banana", "Laranja", "Zimbro", "Uva", "Pera", "Jaca"];
console.log(frutas);
console.table(frutas);


//Visualizando o conteúdo do array
console.log(frutas[0]);

//Visualizando o tamanho do array
console.log("TAMANHO DO ARRAY", frutas.length)

//Percorrer todo o array utilizando um LOOP
console.log("====================LOOP FOR TRADICIONAL======================");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log("====================LOOP FOR OF======================")
//Percorrer todo o array utilizando o LOOP FOR OF
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("====================LOOP FOR IN======================");
//Percorrer todo o array utilizando o LOOP FOR IN
for (let i in frutas) {
    console.log(i, frutas [i]);
    }
    
    
console.log("====================LOOP FOR EACH======================");
//Percorrer todo o array utilizando o LOOP FOR EACH
frutas.forEach( function(f, indice, array){
    console.log("item", indice, f);
} );

// let frase = "Hoje acordei feliz da vida o curinthia ganho!!"
// for (let i = 0; i < frase.length; i++) {
//     console.log(frase[i]);
// }

// document.getElementById("btnAdd").addEventListener("click", function(){
//     console.log(this.textContent);
// })

//Recuperar a lista UL que está no HTML de id 'lista'
let lista = document.getElementById("lista")

frutas.forEach( fruta=>{
    //Criando elementos li para adicioanar a lista.
    let elementoLi = document.createElement("li");
    //Criando texto para adicionar ao elemento li
    elementoLi.textContent = fruta;
    //Adiciona o elemento a lista
    lista.appendChild(elementoLi);
})


