debugger
fetch("/irpf.json").then((response) => {
    response.json().then((aliquotas)=>{
        console.log(aliquotas);
    })
})