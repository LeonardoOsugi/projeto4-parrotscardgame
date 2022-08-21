let opcao = 0;

while(opcao % 2 !== 0 || opcao < 4 || opcao > 14){
    opcao = Number(prompt("Com quantas cartas quer jogar[4 até 14 cartas, evite digitar numeros impares: ]"));
}


const lista = document.querySelector("ul");
const globalCards = lista.childNodes;

globalCards.sort(comparador);
console.log(globalCards);

function comparador() {
    return Math.random() - 0.5;
  }


function virado(seletor) {
    
}