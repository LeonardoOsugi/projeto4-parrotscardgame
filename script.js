const lista = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot", 
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
];

const cartas = [];

const cards = document.querySelector('.card');

let opcao = 0;

while(opcao % 2 !== 0 || opcao < 4 || opcao > 14){
    opcao = Number(prompt("Com quantas cartas quer jogar[4 até 14 cartas, evite digitar numeros impares: ]"));
}

const alguma = document.querySelector('.all-cards');

for( i = 0; i< (opcao/2); i++){
    cartas[i] = `
    <li class="card" data-git="${lista[i]}" onclick="virado(this)">
        <img class="front-face" src="./img/front 13.svg" alt="">
        <img class="back-face" src="./img/${lista[i]}.gif" alt=""> 
    </li>
    `;

    

    cartas[i+opcao/2]  = `
    <li class="card" data-git="${lista[i]}" onclick="virado(this)">
        <img class="front-face" src="./img/front 13.svg" alt="">
        <img class="back-face" src="./img/${lista[i]}.gif" alt=""> 
    </li>
    `;



}

function baralhador() {
    return Math.random() - 0.5;
}

cartas.sort(baralhador);

for(i = 0; i< opcao; i++){
    alguma.innerHTML += cartas[i];
}


let checkao = false;
let firstCard = "";
let secondCard = "";

function virado(seletor) {
    if(seletor === firstCard) return;

    seletor.classList.add('apareca');

    if(!checkao){
        checkao = true;
        firstCard = seletor;
        return;
    }else{
        secondCard = seletor;
        checkao = false;
        comparador();
        return;
    }
}


let cont = 0;
function comparador(){
    if(firstCard.dataset.git === secondCard.dataset.git){
        firstCard.setAttribute("onclick", "");
        secondCard.setAttribute("onclick","");
    }else{
        setTimeout(viradaReversa, 1000);
    }
    firstCard = "";
    secondCard = "";
}

function viradaReversa(){
    firstCard.classList.remove('apareca');
    secondCard.classList.remove('apareca');
}