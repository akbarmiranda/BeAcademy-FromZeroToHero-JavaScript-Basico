// OPERADORES LÓGICOS

//Operador Incremento e Decremento
// ++ --
let incrementNumber = 4;
console.log(incrementNumber);
// +1
incrementNumber++; //5
console.log(incrementNumber);
++incrementNumber; //6 +1
console.log(incrementNumber);

let decrementNumber = 50;
console.log(decrementNumber);
decrementNumber--; //49
console.log(decrementNumber);
--decrementNumber; //48
console.log(decrementNumber);

// Operadores Aritméticos
// + - / * %
let note1 = 10;
let note2 = 7.5;
let note3 = 9;
let note4 = 4.5;
let avg = (note1 + note2 + note3 + note4) / 4;
console.log(avg);
console.log(avg.toFixed(1));
console.log(typeof avg.toFixed());
console.log(Number(avg.toFixed(1)));
console.log(typeof avg.toFixed());
console.log(Number(Math.floor(avg)));
console.log(typeof avg.toFixed());
console.log(Number(Math.round(avg)));

//Operadores relacionais e igualdade
// < > ==(igual no valor) === (igual no valor e no tipo)
// != (diferente no valor) !== (diferente no valor e no tipo) >= <=
///////////////////////////////////////////////
let numberRelation1 = 20;
let numberRelation2 = 40;
let relation = numberRelation1 != numberRelation2;
// é diferente no valor?
console.log(relation);
///////////////////////////////////////////
relation = numberRelation1 !== numberRelation2;
// é diferente no valore diferente no tipo?
//apesar de não serem diferentes no tipo a resposta
//foi true, porque na opção !== basta um da certo que o
//retorno é true porque é OU(or) um OU(or) outro
console.log(relation);
//////////////////////////////////////////////
relation = numberRelation1 == numberRelation2;
//té igual no valor?
console.log(relation);
//////////////////////////////////////////////
relation = numberRelation1 === numberRelation2;
//é igual no valor e no tipo?
//apesar de não serem diferentes no tipo a resposta
//foi false, porque na opção === basta uma da errado que o
//retorno é false porque é um E (and) outro
console.log(relation);
//////////////////////////////////////////////////

//Operador de atribuição

let newNumber = 20;
newNumber += 40;
newNumber *= 3;
newNumber -= 60;
newNumber /= 6;
newNumber %= 5;
console.log(newNumber);
//Operadores condicionais (Ternário)
//(condition) ? true : false

let value = 24;
let value2 = 32;

const newCondition = value >= value2 ? 'Isso é verdade' : 'Isso é uma mentira';
console.log(newCondition);

const newCondition2 =
  value >= value2
    ? 'Isso é verdade'
    : value <= value2
    ? 'Isso é verdade, segunda resposta true'
    : 'resposta falsa para tudo!!!';
console.log(newCondition2);
