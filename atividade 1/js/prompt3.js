alert("Mês do Aniversário");
var mes;
mes=parseInt(prompt("Digite o número correspondente ao mês do seu aniversário"));

switch(mes){
    case 1:
        document.write('<br> Janeiro');
        break;
    case 2:
        document.write("<br> Fevereiro");
        break;
    case 3:
        document.write("<br> Março");
        break;
    case 4:
        document.write("<br> Abril");
        break;
    case 5:
        document.write("<br> Maio");
        break;
    case 6:
        document.write("<br> Junho");
        break;
     case 7:
        document.write("<br> Julho");
        break;
     case 8:
        document.write("<br> Agosto");
        break;
     case 9:
        document.write("<br> Setembro");
        break;
    case 10:
        document.write("<br> Outubro");
        break;
    case 11:
        document.write("<br> Novembro");
        break;
    case 12:
        document.write("<br> Dezembro");
        break;
        default:
            document.write("<br> Este número não é correspondente a nenhum mês");
            break;
}