function Calcular() {
    //debugger
    let valorTotal = document.getElementById('valorTotal').value;
    let parcelas = document.getElementById('qtdParcelas').value;
    let retornoInvestimento = document.getElementById('retornoInvestimento').value;
    let desconto = document.getElementById('desconto').value;

    if (parcelas != "" && valorTotal != "" && retornoInvestimento != "") {

        var retornoTotal = (valorTotal * retornoInvestimento * (parcelas - 1)) / 2;

        document.getElementById('resultadoInvestimento').textContent = 'Retorno do investimento: ' + retornoTotal;

        if (desconto != "") {
            desconto = desconto * valorTotal;
            document.getElementById('resultadoDesconto').textContent = 'Valor do desconto: ' + desconto;
        }
    }
    else {
        alert('Preencha todos os campos corretamente!')
    }
}

// function(){const de0a6 = {
//     "perc": 0.225, "dias": 180} ;
//     const de6a12 = 0.2;
//     const de12a24 = 0.175;
//     const de24acima = 0.15;
//     }