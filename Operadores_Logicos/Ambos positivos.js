let num1 = -2;
let num2 = -4;
let verdade1 = (num1 > 0);
let verdade2 = (num2 > 0);

if (verdade1  == true && verdade2 == true) {
  console.log("Sim, ambos são positivos!");
}else if (verdade1 == true && verdade2 == false || verdade2 == true && verdade1 == false) {
  console.log("Não, um dos números não é positivo!");
}else {
  console.log("Não, ambos são negativos!");
}