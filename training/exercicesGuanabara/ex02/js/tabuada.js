function calcular() {
    var numero = Number(document.querySelector('#numtxt').value);
    var expresRad = document.querySelectorAll('input[name="expressao"]');
    var express = '';

    if(expresRad[0].checked){
        express = 'Multiplicar';
        console.log(express);
    }else if(expresRad[1].checked){
        express = 'Somar';
        console.log(express);

    }else if(expresRad[2].checked){
        express = 'Subtrair';
        console.log(express);

    }else if(expresRad[3].checked){
        express = 'Dividir';
        console.log(express);

    }

    if (express == ''){
        alert('por favor, selecione uma operação');
        return;
    }else if (numero == ''){
        alert('por favor, insira um número');
        return;
    }

    var qntd = 10;
    var tabuada_cont = document.querySelector('#tabuada');
    var divResultado = document.createElement('div');
    
    divResultado.id = 'res';
    divResultado.style.width = 'auto';
    divResultado.style.height = 'auto';
    divResultado.style.border = '1px solid black';
    divResultado.style.padding = '10px';
    divResultado.style.margin = '10px';
    divResultado.style.backgroundColor = '#f0f0f0';

    tabuada_cont.appendChild(divResultado);

    function clearDiv() {
        var qtndDivs = tabuada_cont.childElementCount;
            console.log(qtndDivs);
            if (qtndDivs > 5 ) {
                console.log('removendo');
                tabuada_cont.removeChild(tabuada_cont.firstChild);
            }
            
    }
    
    var resultado = 0;
    switch (express) {
        case 'Multiplicar':
            for (qntd = 0; qntd <= 10; qntd++) {
                resultado = qntd * numero;
                console.log(resultado);
                divResultado.innerHTML += `${qntd} x ${numero} = ${resultado}<br>`;
            }
            clearDiv();
            
            
            break;

        case 'Somar':
            for (qntd = 0; qntd <= 10; qntd++) {
                resultado = qntd + numero;
                console.log(resultado);
                divResultado.innerHTML += `${qntd} + ${numero} = ${resultado}<br>`;
            }
            clearDiv();

            break;

        case 'Subtrair':
            for (qntd = 0; qntd <= 10; qntd++) {
                resultado = qntd - numero;
                console.log(resultado);
                divResultado.innerHTML += `${qntd} - ${numero} = ${resultado}<br>`;
            }
            clearDiv();

            break;

        case 'Dividir':
            for (qntd = 0; qntd <= 10; qntd++) {
                resultado = qntd / numero;
                console.log(resultado);
                divResultado.innerHTML += `${qntd} / ${numero} = ${resultado}<br>`;
            }
            clearDiv();

            break;

        default:
            break;
        
    }



};

function limpar() {
    var tabuada_cont = document.querySelector('#tabuada');
    var divResultado = document.querySelector('#res');
    while (tabuada_cont.firstChild) {
        tabuada_cont.removeChild(tabuada_cont.firstChild);
    }
}