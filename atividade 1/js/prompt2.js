alert("Hello Word");
 var numero =parseInt (prompt("Digite um número para ver a série de Fibonacci até o enésimo termo"));
 var ante = proxi = 0;
 var act = 1;

for(var i=1;i<=numero;i++){
    prox = ante+act;
    ante = act;
    act = prox;
    
}
document.write("resultado "+ante);
