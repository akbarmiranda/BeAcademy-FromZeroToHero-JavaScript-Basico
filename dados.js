// Type Conversion

// Convertendo String para n~umero e n~umero para string
console.log(Number('9') + 24);
console.log(typeof String(9) + ' Converteu diacho!!!');

//Contar Caracteres

let oneWord = 'Moacir';
console.log(oneWord.length);

//Maiúsculas e Minúsculas
let phrase = 'Olha a galera do bootcamp';
console.log(phrase.toUpperCase());
console.log(phrase.toLowerCase());

//Convertendo para inteiro

let decimalNumber = 37.56;
console.log(parseInt(decimalNumber));

//Convertendo para decimal
let integerNumber = 37;
console.log(parseFloat(integerNumber));

// Trabalhando com casas decimais, n~umeros depois da vírgula
let niceNumber = 42.698659654679621;
console.log(niceNumber.toFixed(2));
console.log(niceNumber.toFixed(2).replace('.', ','));

// Precisão numérica

let otherNumber = 129 / 32;
console.log(otherNumber);
console.log(typeof Number(otherNumber.toPrecision()));

// Manipulações de String e Arrays
/*
  Separando um texto que contem escopo em um novo Array onde
  cada texto é uma posição do array
*/

let newPhrase = 'Fala meus queridos e queridas ';
console.log(newPhrase);
let phraseToArray = newPhrase.split(' '); //Se não colocar esse
// espaço ele vai separar letra por letra
console.log(phraseToArray);
console.log(typeof phraseToArray);

let phraseModify = phraseToArray.join(' ').toLocaleLowerCase();
// O join só aparece quando estamos trabalhando com Arrays
// o toLocaleLowerCase() transformou todo o texto em letra minúscula
console.log(phraseModify);
console.log(typeof phraseModify);

//Verificar se tem alguma palavra ou letra
// Javascritp é sensitive case

let stringInclude = 'Vem ne mim CentralIT';
console.log(stringInclude.includes('Vem'));

//Objetos

let arrayInclude = [
  'CentralIT',
  'vem',
  'ne mim',
  {
    firstname: 'Central',
    lastname: 'IT',
  },
];
//Só funciona para arrays ou para strings num objeto não funciona
console.log(arrayInclude.includes('Central'));
console.log(arrayInclude.includes('CentralIT'));
//demonstrando mais uma vez que ele nâo acha dentro de um objeto
console.log(arrayInclude.includes({ firstname: 'Central' }));

//String starwith

console.log(stringInclude.startsWith('Ve'));

//String endWith

console.log(stringInclude.endsWith('IT'));

// transformando um Array em Caracteres

let wordToArray = 'Quem está gostando de Hey!!!';
console.log(Array.from(wordToArray));

//manipulando arrays

const animals = ['gato', 'papagaio', 'cobra', 'elefante'];
console.log(animals);

//Adicionar item no fim do Array

console.log(animals.push('rato'));
console.log(animals);

//adcionar item no começo
console.log(animals.unshift('peru'));
console.log(animals);

//Remover o item do fim

console.log(animals.pop());
console.log(animals);

//remover item do começo
console.log(animals.shift());
console.log(animals);

// Pegar somente alguns elementos do Array
//Não modificar o Array
// Neste exemplo ele mostra da primeira posição escolhida
//até uma anterior a última.
//No nosso exemplo ele pegou as posições 0,1 e 2
console.log(animals.slice(0, 3));
//
//remover 1 ou mais itens do Array

// Neste exemplo ele mostra da primeira posição escolhida
//até uma anterior a última.
//No nosso exemplo ele mostra as posições 1 , 2 e 3

console.log(animals.splice(1, 3));
//remover um ou mais itens do Array
//animals.splice(1, 3);
//console.log(animals);

//encontrar a posição do Array
let index = animals.indexOf('gato');
console.log(index);
animals.splice(index, 1);
console.log(animals);
