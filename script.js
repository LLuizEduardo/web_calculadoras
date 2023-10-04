///////////////////////////////////////////////////////////////////////////////
//Geral
function GetValueId(id) {
    return document.getElementById(id).value;
}


fetch("/irpf.json").then((response) => {
    response.json().then((aliquotas) => {
        console.log(aliquotas);
    })
})


///////////////////////////////////////////////////////////////////////////////
//A vista ou cartao
function calcular() {
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
            resultado += '\nValor do desconto: ' + desconto;
        }

        alert(resultado);
    }
    else {
        alert('Preencha todos os campos corretamente!')
    }
}

///////////////////////////////////////////////////////////////////////////////
//Retorno investimentos
function calcularInvestimento() {

    let valorInvestimento = GetValueId('valorInvestimento');
    let qtdmeses = GetValueId('qtdmeses');
    let retornoInvestimento = GetValueId('retornoInvestimento');

    let dias = qtdmeses * 30;
    let aliquotaIR = 0.15;

    if (dias < 180)
        aliquotaIR = 0.225;
    else if (dias < 360)
        aliquotaIR = 0.2;
    else if (dias < 720)
        aliquotaIR = 0.175;

    aliquotaIR = 1 - aliquotaIR
    retornoInvestimento = retornoInvestimento / 100;

    if (valorInvestimento != "" && qtdmeses != "" && retornoInvestimento != "") {

        let retornoTotal = valorInvestimento * (1 + retornoInvestimento * aliquotaIR) ** qtdmeses;

        let resultado = 'Retorno do investimento: ' + retornoTotal;

        alert(resultado);
    }
    else {
        alert('Preencha todos os campos corretamente!')
    }
}