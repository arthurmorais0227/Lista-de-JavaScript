let num1 = 8;
let num2 = 9;
let operação = "=";

switch (operação) {
  case operação = "+":
    console.log(`O resultado da soma é ${num1 + num2}.`);
    break;
  case operação = "-":
    console.log(`O resultado da subtração é ${num1 - num2}.`);
    break;
  case operação = "*":
   console.log(`O resultado da multiplicação é ${num1 * num2}.`);
    break;
  case operação = "/":
     console.log(`O resultado da divisão é ${num1 / num2}.`);
     break;
  default:
    console.log("A operação inserida é inválida! As operações disponíveis são: + (soma), - (subtração), * (multiplicação) e / (divisão).");
}