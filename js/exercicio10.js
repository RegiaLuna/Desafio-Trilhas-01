alert("Escolha um número!")
var numeroSecreto = 5;
var chute;

while (chute != numeroSecreto) {
    chute = prompt('Escolha outro número');
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto é ${numeroSecreto}`);
    } else {
        if(chute != numeroSecreto) {
        alert("Tente novamente");
    } 
}
}
