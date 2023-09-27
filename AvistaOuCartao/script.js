function calcular() {
    // debugger
    let valorTotal = GetValueId('valorTotal');
    let parcelas = GetValueId('qtdParcelas');
    let retornoInvestimento = GetValueId('retornoInvestimento');
    let desconto = GetValueId('desconto');

    retornoInvestimento = retornoInvestimento / 100;
    desconto = desconto / 100;

    if (parcelas != "" && valorTotal != "" && retornoInvestimento != "") {

        let retornoTotal = (valorTotal * retornoInvestimento * (parcelas - 1)) / 2;

        // document.getElementById('resultadoInvestimento').innerHTML = 'Retorno do investimento: ' + retornoTotal;
        let resultado = 'Retorno do investimento: ' + retornoTotal;

        if (desconto != "") {
            desconto = desconto * valorTotal;
            // document.getElementById('resultadoDesconto').innerHTML = 'Valor do desconto: ' + desconto;
            resultado += '\nValor do desconto: ' + desconto;
        }

        alert(resultado);
    }
    else {
        alert('Preencha todos os campos corretamente!')
    }
}

function GetValueId(id) {
    return document.getElementById(id).value;
}