//3) Crie uma função que receba três valores, 'a', 'b' e 'c', que são os coeficientes de uma equação do segundo grau e retorne o valor do delta, que é dado por 'b² - 4ac'

var number1 = parseInt(prompt("Digite o valor de A"));
var number2 = parseInt(prompt("Digite o valor de B"));
var number3 = parseInt(prompt("Digite o valor de C"));

function delta (number1,number2,number3) {
  return (number2 * number2) - (4 * number1 * number3);
}
var result = delta(number1,number2,number3);
document.body.append(result);
