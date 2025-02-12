var nota = prompt("Qual foi sua nota?");
if (nota >= 0 && nota <= 10) { 
if (nota >= 7) {
    alert("Aprovado!")
} else  if(nota >= 5 || nota <= 6){
        alert("Você esta de recuperação!")
    } else{
        alert("Você esta reprovado!")
    }

}