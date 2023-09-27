function calcularInvestimento() {

    let valorInvestimento = GetValueId('valorInvestimento');
    let qtdmeses = GetValueId('qtdmeses');
    let retornoInvestimento = GetValueId('retornoInvestimento');

    retornoInvestimento = retornoInvestimento / 100;

    if (valorInvestimento != "" && qtdmeses != "" && retornoInvestimento != "") {

        let retornoTotal = valorInvestimento * (1 + retornoInvestimento) ** qtdmeses;

        let resultado = 'Retorno do investimento: ' + retornoTotal;

        alert(resultado);
    }
    else {
        alert('Preencha todos os campos corretamente!')
    }
}

function GetValueId(id) {
    return document.getElementById(id).value;
}