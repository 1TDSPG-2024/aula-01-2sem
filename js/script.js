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
