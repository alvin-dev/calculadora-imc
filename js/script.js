
// peso / altura * altura 

function calculaIMC(peso, altura) {
    var alturaMetros = altura / 100;
    var resultadoIMC = peso / (alturaMetros * alturaMetros);

    return resultadoIMC;
}

function feedbackIMC(imc) {
    if (imc < 18.5) {
        return 'Magreza!'

    } else if (imc >= 18.5 && imc <=29.99) {
        return 'Peso Normal!'

    }else if (imc >= 30 && imc <=34.99) {
        return 'Obesidade I!'

    }else {
        return 'Obesidade II (severa)'
    }
}

var feedback = feedbackIMC(calculaIMC);
var calculadora = document.querySelector('#calculadora');

var campoPeso = document.querySelector('#peso');
var campoAltura = document.querySelector('#altura');
var btn = document.getElementById('btn');

var resultado = document.querySelector('#resultado');

function manipulaInput(){
    //validação - se o campo estiver preenchido
    if (campoPeso.value != "" && campoAltura.value != "") {
        
        var imc = calculaIMC(campoPeso.value, campoAltura.value);
        var feedback = feedbackIMC(imc);

        resultado.innerHTML = `<h3>IMC: ${imc.toFixed(2)} <br> ${feedback}</h3>`;
    }
};

// calcula ao clicar no botão
btn.addEventListener("click", manipulaInput);

btn.addEventListener("keypress", manipulaInput);

$(window).keypress(function (e) {
    //use e.which
    var keyCode = e.which;
    console.log(e, keyCode, e.which)
    if (keyCode == 119) {
        console.log("You pressed W!");
        alert("You pressed W!");
    }
})