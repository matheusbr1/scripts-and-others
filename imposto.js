 Number.prototype.entre = function(inicio,fim){
    return this >= inicio && this <= fim
}

var valorPagamento

const calcular = function(){
    let valor = $("#valorInput").val()
    if(valor < 1903){
        valorPagamento = 0
        imprimir(valorPagamento)
    }else if (valor >= 1903 && valor <= 2826){
        valorPagamento = valor * 0.07
        imprimir(valorPagamento)
    }else if (valor >= 2826 && valor <= 3751){
        valorPagamento = valor * 0.15
        imprimir(valorPagamento)
    }else if(valor >= 3751 && valor <= 4664){
        valorPagamento = valor * 0.225
        imprimir(valorPagamento)
    }else{
        valorPagamento = valor * 0.27
        imprimir(valorPagamento)
    }
}

const imprimir = function(valorPagamento){ 
    let arredondado = parseFloat(valorPagamento).toFixed(2)
    $("#pagar").append(arredondado)
    console.log("Valor à pagar: ",parseFloat(valorPagamento).toFixed(2))
    valorPagamento = 0
}