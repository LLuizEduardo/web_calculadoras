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

const formularios = document.querySelector("#formulario");
formularios.addEventListener("submit", (e) => {
    e.preventDefault();
})

function limparFormulario() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(element => {
        element.value = null;
    });
}

function converterParaMoeda(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

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

        let resultado = 'Retorno do investimento: ' + converterParaMoeda(retornoTotal);

        if (desconto != "") {
            desconto = desconto * valorTotal;
            resultado += '\nValor do desconto: ' + converterParaMoeda(desconto);
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

        let resultado = 'Retorno do investimento: ' + converterParaMoeda(retornoTotal);

        alert(resultado);
    }
    else {
        alert('Preencha todos os campos corretamente!')
    }
}