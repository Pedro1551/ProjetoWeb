//captura todos clientes que fizeram encomenda

var clientes = documento.QuerySelector(".cliente");

//Passa por cada encomenda, calculando o valor tptaç
for (var count=0; count < clientes.lenght; count++){
      //Captura a quantidade encomendada

      var qtde = clientes[count].QuerySelector(".info-qtde").textContent;
//Captura o valor unitário do produto
var unitario = clientes[count].QuerySelector(".info-valor").textContent;
//Valida a quantidade
if(qtde<1 || isNaN(qtde)){
    //Quantidade NOK, avisa o usuário
    clientes[count].QuerySelector(".info-qtde").textContent = "QTDE INVÁLIDA!";
    clientes[count].style.color="red";
}else{
    //Quantidade OK, pode prosseguir
    //calcula o valor total da encomenda
}
//Calcula o valor total da encomenda
clientes[count].QuerySelector(".info-total").textContent = qtde * unitario;

}

//Função para calcular o valor total da encomensa
function calculaTotal(qtde,unitario){
    var total = 0;
    total=qtde*unitario;

    return total;
}
