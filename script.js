let opcao = 0;

while(opcao % 2 !== 0 || opcao < 4 || opcao > 14){
    opcao = Number(prompt("Com quantas cartas quer jogar[4 até 14 cartas, evite digitar numeros impares: ]"));
}


function virado(seletor) {
    seletor.classList.add('virada');
}