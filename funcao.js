// Exemplo 1
// Method
function myFirstFunction() {
  // Entra meu código
  console.log('Olha a função');
}

// Execute
myFirstFunction();

// Função com parâmetros

//number1 =32 e number2=24
function sum(number1, number2) {
  console.log(number1 + number2);
}
sum(32, 24);

// Função com retorno

function myFirstFunctionWithReturn(num1, num2) {
  let total = num1 + num2;
  return total;
}

//Total = ????

console.log(myFirstFunctionWithReturn(20, 20));

//Restaurante
function meuPratoDeComida(comida1, comida2, comida3, comida4) {
  return `Meu prato de comida é: ${comida1}, ${comida2}, ${comida3}, ${comida4}`;
}

const prato = meuPratoDeComida('Arroz', 'Feijão', 'Bife', 'Batata frita');
console.log(prato);

//Arrow Function

const myFirstArrowFunction = (number1, number2) => {
  let total = number1 + number2;
  return total;
};

const result = myFirstArrowFunction(20, 20);
console.log(result);

// Função anônima

(function () {
  console.log('Beacademy');
})(); // Autoexecução

// Função anônima nativa do javascript

setTimeout(function () {
  console.log('Vou levar 3 segundos para ser executado!');
}, 3000); //3 segundos;

// Parte 1

//let assunto;

// o  assunto dentro da função é diferente do assunto fora da função
//function criarAssunto(assunto) {
//  return assunto;
//}

//console.log(criaAssunto(assunto));

//Parte 2

//let assunto = 'Estudar'; //variável está com um valor
//function criarAssunto(assunto) {
//  return assunto; // este assunto continua indefinido ele é local
//}
//console.log(assunto); // Resposta =>'Estudar'
//console.log(criarAssunto(assunto)); // Resposta =>'Estudar'

//Parte 3

//let assunto = 'Estudar'; //variável está com um valor
//function criarAssunto(assunto) {
//  assunto = 'Escutar música'; // mudançca de valor
//  return assunto; // este assunto continua indefinido, ele é local
//}
//console.log(assunto); // Resposta =>'Estudar'
//console.log(criarAssunto(assunto)); // Resposta =>'Escutar música'

//Parte 4

//let assunto = 'Estudar'; //variável está com um valor
//function criarAssunto() {
//sem parâmetro
// assunto = 'Escutar música'; // mudançca de valor
// return assunto; // este assunto continua indefinido, ele é local
//}
//console.log(assunto); // Resposta =>'Estudar'
//console.log(criarAssunto(assunto)); // Resposta =>'Escutar música'

//Hoisting

// Só funciona no jeito old school
digaMinhaIdade();

function digaMinhaIdade() {
  return console.log(48);
}
// Não funciona do jeito mais moderno
//const digaMinhaIdade = function () {
//  return console.log(48);
//};

// função callback

function minhaFuncao(callback) {
  console.log('Inicio da minha função =)');

  callback(15, 15);
  console.log('Final da minha função');
}
minhaFuncao((num1, num2) => {
  return console.log(num1 + num2);
});

// Função construtora - Function Construct -  Usada quando for instanciar ou reaproveitar
// a função em um determinado momento

function Sum() {
  this.num1,
    this.num2,
    (this.calc = function (num1, num2) {
      return (total = num1 + num2);
    });
}

//const math = new Sum();
//console.log(math);
//console.log(math.calc(32, 32));

//const math2 = new Sum();
//console.log(math.calc(50, 64));

//const math = new Sum();
//const num1 = (math.num1 = 24);
//const num2 = (math.num2 = 50);

//console.log(math.calc(num1, num2));

//const math2 = new Sum();
//const number1 = (math2.num1 = 30);
//const number2 = (math2.num2 = 10);
//console.log(math.calc(number1, number2));
const math = new Sum().calc(45, 45);
console.log(math);

//

const data = new Date().getDate();
console.log(data);
