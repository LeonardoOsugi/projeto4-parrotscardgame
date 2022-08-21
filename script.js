const lista = [
    "./img/bobrossparrot.gif",
    "./img/explodyparrot.gif",
    "./img/fiestaparrot.gif", 
    "./img/metalparrot.gif",
    "./img/revertitparrot.gif",
    "./img/tripletsparrot.gif",
    "unicornparrot.gif"
];
console.log(lista);
const listaVazia = [];
const listaVazia2 = [];

const cards = document.querySelector('.card');

let opcao = 0;

while(opcao % 2 !== 0 || opcao < 4 || opcao > 14){
    opcao = Number(prompt("Com quantas cartas quer jogar[4 até 14 cartas, evite digitar numeros impares: ]"));
}

const aleatorio = lista.sort(comparador);


/*for(const i = 0; i < opcao; i++){
    listaVazia.push(lista[i]);
    listaVazia2.push(lista[i]);
}*/

listaVazia.concat(listaVazia2);
console.log(listaVazia);


function comparador() {
    return Math.random() - 0.5;
  }


function virado(seletor) {
    seletor.classList.add('apareca');
}