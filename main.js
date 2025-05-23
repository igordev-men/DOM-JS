const inputA = document.getElementById('input-a');
const inputB = document.getElementById('input-b');
const consultar = document.getElementById('consultar');
const resultado = document.getElementById('resultado');


consultar.addEventListener('click', function(){

    let valorAString = inputA.value;
    let valorBString = inputB.value;
    
    let a = parseFloat(valorAString);
    let b = parseFloat(valorBString);
    
    let resultadoCompara="";

    if (a < b){
        resultadoCompara =`${a} é menor que ${b}`;
    }
    
     else if (a> b){
        resultadoCompara =`${a} é maior que ${b}`;
    }
    
    else {
        resultadoCompara =`${a} é igual  ${b}`;
    }

    resultado.textContent= resultadoCompara;

    console.log(`Valor de A (numérico): ${a}`);
    console.log(`Valor de B (numérico): ${b}`);
    console.log(`Resultado da comparação: ${resultadoCompara}`);
})