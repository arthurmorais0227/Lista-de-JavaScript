let num1 = 12;
let num2 = 11;
let num3 = 13;

if (num1 < num2 && num1 < num3) {
    console.log(`O menor número é ${num1}.`);
}else if (num2 < num1 && num2 < num3) {
    console.log(`O menor número é ${num2}.`);
}else{
    console.log(`O menor número é ${num3}.`);
}