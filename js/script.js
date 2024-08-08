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


//Recuperar a lista UL que está no HTML de id 'lista'
let lista = document.getElementById("lista")

document.getElementById("btnAdd").addEventListener("click", () => {
    let inputFruta = document.getElementById("idFruta");
    
    // frutas.push(inputFruta.value);Insere no final da lista
    frutas.unshift(inputFruta.value);//Insere no início da lista
    renderizaLista();
    inputFruta.value = "";
})

// document.getElementById("btnAdd").addEventListener("click", () => {
//     //Recuperando o input onde o nome da fruta  é digitado.
//     let inputFruta = document.getElementById("idFruta");

//     //Passando o valor digitado no campo para o método PUSH()
//     frutas.push(inputFruta.value);
//     renderizaLista()
//     inputFruta.value = ""
// });

document.getElementById("btnDel").addEventListener("click", () => {
    //Recuperando o input onde o nome da fruta é digitado.
    let inputFruta = document.getElementById("idFruta");

    //Passando o valor digitado no campo para o método indexOf para decobrir indice do elemento.
    let indice = frutas.indexOf(inputFruta.value);
    if (indice > -1) {
        frutas.splice(indice, 1);
        renderizaLista();
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