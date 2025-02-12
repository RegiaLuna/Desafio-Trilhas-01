var mensagem = "";

for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
        mensagem += i + " "; 
        document.getElementById("contagem").innerHTML = mensagem; 
    }, i * 500); 
}
