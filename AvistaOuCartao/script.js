function calcular() {
// debugger
    let valorTotal = GetValueId('valorTotal');
    let parcelas = GetValueId('qtdParcelas');
    let retornoInvestimento = GetValueId('retornoInvestimento');
    let desconto = GetValueId('desconto');

    retornoInvestimento = retornoInvestimento/100;
    desconto = desconto/100;
 
    if (parcelas != "" && valorTotal != "" && retornoInvestimento != "") {

        var retornoTotal = (valorTotal * retornoInvestimento * (parcelas - 1)) / 2;

        // document.getElementById('resultadoInvestimento').textContent = 'Retorno do investimento: ' + retornoTotal;
        document.getElementById('resultadoInvestimento').innerHTML = 'Retorno do investimento: ' + retornoTotal;

        if (desconto != "") {
            desconto = desconto * valorTotal;
            // document.getElementById('resultadoDesconto').textContent = 'Valor do desconto: ' + desconto;
            document.getElementById('resultadoDesconto').innerHTML = 'Valor do desconto: ' + desconto;
        }
    }
    else {
        alert('Preencha todos os campos corretamente!')
    }
}

function GetValueId(id){
    return document.getElementById(id).value;
}