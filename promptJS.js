let input1 = prompt("Digite um valor numerico:\n");
    let a = parseInt(input1);
let input2 = prompt("Digite o segundo valor numerico:\n");
    let b = parseInt(input2);
let op = prompt("Digite o simbolo da operacao a ser realizada (+, -, *, /):\n");

const maiorque = 'É maior que 10';
const menorque = 'É menor que 10';
const iguala = 'É igual a 10';

function alertaResult(resultado) {
    {
        if (resultado < 10) {
            alert(menorque);
        } else if (resultado > 10) {
            alert(maiorque);
        } else if (resultado === 10) {
            alert(iguala);
        }
    }
}

switch(op){

    case  '+':
        resultado = a + b;
        alertaResult(resultado);
        break;

    case '-':
        resultado = a - b;
       alertaResult(resultado);
        break;

    case '/':
        resultado = a / b;
        alertaResult(resultado);
        break;

    case '*':
        resultado = a * b;
        alertaResult(resultado);
        break;

    default:
    alert("Insira um valor valido!");
    break;
}

let nome = prompt("Insira um nome:\n")
let n = prompt("Digite quantas vezes você quer repetir esse nome:\n")
    for (let i = 0; i < n; i++){
        alert(nome);
    }