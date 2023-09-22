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