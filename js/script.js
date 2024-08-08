// let aluno1 = "João"
// let aluno2 = "Carlos"
// let aluno3 = "Maria"

// let aluno = ["João", "Carlos", "Maria"]

// let grupos = [["Laura", "Letícia"], ["Pedro", "Gustavo"]]
// // Acessar o Pedro -> grupos[1][0]

// let carros = [
//   {"marca": "Honda", "modelo": "Civic"},
//   {"marca": "Toyota", "modelo": "Corolla"},
//   {"marca": "GM", "modelo": "Cruze"}
// ]
// // Acessar o Corolla -> carros[1].modelo

// aluno[3] = "Barbara"
// // Adicionar a Barbara

// // Declarando um array com 6 nomes de frutas:
// let frutas = ["Maçã", "Banana", "Laranja", "Zimbro", "Uva", "Pera", "Jaca"];
// console.log(frutas);
// console.table(frutas);

// // Visualizando o conteúdo do array
// console.log(frutas[5]);

// // Verificando o tamanho do array
// console.log("Tamanho do array", frutas.length);

// // Percorrer todo o array utilizando um LOOP
// // FOR TRADICIONAL
// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// // FOR OF
// for (let f of frutas) {
//   console.log(f);
// }

// // FOR IN
// for (let i in frutas) {
//   console.log(i, frutas[i]);
// }

// // FOR EACH -> Não possuí interrupção
// frutas.forEach(function (f, indice, array) {
//   console.log("ITEM", indice, f, array[indice]);
// });

let frutas = ["Maçã", "Banana", "Laranja", "Zimbro", "Uva", "Pera", "Jaca"];

// Recuperar a lista ul que está no HTML de id 'lista'
let lista = document.getElementById("lista");

function renderizaLista() {
  lista.innerHTML = "";
  frutas.forEach((fruta) => {
    // Criando elementos li para adicionar na lista.
    let elementoLi = document.createElement("li");
    // Criando texto para adicionar no elemento li.
    elementoLi.textContent = fruta;
    // Adicionar o elemento li na lista
    lista.appendChild(elementoLi);
  });
}

renderizaLista();

// Recuperando o botão
const botao = document.getElementById
  .getElementById("btnAdd")
  .addEventListener("click", () => {
    // Recuperando o input onde o nome da fruta é digitado.
    let inputFruta = document.getElementById("idFruta");
    // Passando o valor digitado no campo para o método push
    frutas.push(inputFruta.value);
    renderizaLista();
  });

const botaoApagar = document
  .getElementById("btnDel")
  .addEventListener("click", () => {
    // Recuperando o input onde o nome da fruta é digitado;
    let inputFruta = document.getElementById("idFruta");
    // Passando o valor digitado no campo para o método indexOf para decobrir indice do elemento.
    let indice = frutas.indexOf(inputFruta.value);
    if (indice > -1) {
      frutas.splice(indice, 1);
      renderizaLista();
    } else {
      alert("Item não existe na lista!");
    }
    inputFruta.value = "";
  });

const botaoOrdem = document
  .getElementById("btnOrd")
  .addEventListener("click", () => {
    frutas.sort(); // Ordena em ordem alfabética
    renderizaLista();
  });

const botaoReverte = document
  .getElementById("btnRever")
  .addEventListener("click", () => {
    frutas.reverse(); // Ordena em ordem decrescente (alfabética)
    renderizaLista();
  });
