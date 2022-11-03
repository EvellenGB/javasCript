alert("Hello Word");
var  base = parseInt(prompt("Digite a base"));
var  expoente = parseInt(prompt("Digite o expoente"));
res = 1;

for(var i=1;i<=expoente;i++){
    res = res*base;
}
document.write("resultado da potencia <br>"+res)
