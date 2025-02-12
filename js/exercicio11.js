var tabuada = "";

for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
        tabuada += "7 x " + i + " = " + (7 * i) + "<br>"; 
        document.getElementById("contagem").innerHTML = tabuada; 
    }, i * 500); 
}
