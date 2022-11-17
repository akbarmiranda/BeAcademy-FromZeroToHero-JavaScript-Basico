//IF and ELSE
//SE e SENÃO

// > <  == ===  != !==
//&& (AND) || (OR) ! (NOT)
let num = 10;
let num2 = 20;
let isAdmin = true;

if (num >= 5) {
  console.log('VERDADEIRO');
} else {
  console.log('FALSO');
}

if (num >= 10 && num2 >= 10) {
  console.log('VERDADEIRO');
} else {
  console.log('FALSO');
}

if (num >= 10 && num2 <= 10) {
  console.log('VERDADEIRO');
} else {
  console.log('FALSO');
}

if (num >= 10 || num2 <= 10) {
  console.log('VERDADEIRO');
} else {
  console.log('FALSO');
}

if (!isAdmin) {
  console.log('VERDADEIRO');
} else {
  console.log('FALSO');
}

if (num < 10) {
  console.log('Sou maior');
} else if (num >= 10 && num2 <= 20) {
  console.log('Segunda resposta verdade');
} else {
  console.log('resposta falsa');
}

//SWITCH

let myExpression = 'd';

switch (myExpression) {
  case 'a':
    console.log('Apertou o A');
    break;
  case 'b':
    console.log('Apertou o B');
    break;
  case 'c':
    console.log('Apertou o C');
    break;
  default:
    console.log('Você apertou outra tecla', myExpression);
}

//Calculadora

function calc(num1, operator, num2) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;

    case '-':
      result = num1 - num2;
      break;

    case '*':
      result = num1 * num2;
      break;

    case '/':
      result = num1 / num2;
      break;

    default:
      console.log('Não entendi');
      break;
  }

  return result;
}

console.log(calc(4, '*', 4));
console.log(calc(4, '+', 4));
console.log(calc(4, '-', 4));
console.log(calc(4, '/', 4));
console.log(calc(4, '%', 4));

//Throw and Try Catch

//Saber a minha idade
function myAge(myage) {
  if (!myage) {
    throw 'Você precisa colocar a idade';
  }
  console.log('Eu executei depois do erro');
}

try {
  myAge(48);
  console.log('Já tratei e deu certo');
} catch (error) {
  console.log(error);
}

try {
  myAge();
  console.log('Já tratei e deu certo');
} catch (error) {
  console.log(error);
}

console.log('Programa continua');
