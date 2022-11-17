// Para testar os códigos abaixo, é só descomentar cada um por vez e ver
// no console (f12) do browser. Descomente um código, oberver no console
// depois comente novamente, antes de descomentar o próximo para ficar
// melhor o entendimento.
// Declarar
// Aqui eu só declarei as variáveis sem atribuir nenhum valor a elas
// apenas reservei espaço na memória para elas

//var name;
//let name2;
//////////////////////////////////////////////////////////////////////

// Aqui eu declarei os valores das variáveis s

//name = 'asdasd';
//name2 = 'daslkn';

//////////////////////////////////////////////////////////////////////

//Mudando o valor de uma variável

//let name = 'Akbar';
//console.log(name);

//name = 32;
//console.log(name);

//name = 'Miranda';
//console.log(name);

///////////////////////////////////////////////////////////////////////

// Variável fortemente tipada só como exemplo pra entender a diferença
// estamos declarando a variável, dizendo seu tipo (string) e dando
// o seu valor(Akbar).

// let name:String = "Akbar"

////////////////////////////////////////////////////////////////////////

// Globais
/*
Hoisting -> funciona com var e com let
a diferença é que o var é declarado como undefined e o let não é declarado
por baixo dos panos ele pega a variável e joga ela lá pro topo
Assim, as duas perguntas são respondidas mesmo a variável sendo declarada
depois da primeira pergunta. Aparentemente esse é um bug
que só funciona se a variável se chamar "name" se colocar
qualquer outro nome para a variável usando o var ele diz
que a primeira é undefined e a segunda ele responde com um erro 
indefinido 
*/
//teste com var

/*console.log('Variável name existe aqui?', xyz);
{
  // escopo (bloco de código), entre chaves
  //Local
  var xyz = 'Akbar';
}

console.log('Variável name existe aqui?', xyz);
*/
//teste com let
/*
console.log('Variável name existe aqui?', xyz);
{
  // escopo (bloco de código), entre chaves
  //Local
  let xyz = 'Akbar';
}

console.log('Variável name existe aqui?', xyz);
*/
//teste com var e variavel "name"
/*
console.log('Variável name existe aqui?', name);
{
  // escopo (bloco de código), entre chaves
  //Local
  var name = 'Akbar';
}

console.log('Variável name existe aqui?', name);

*/
//teste com let e variavel "name"
/*
console.log('Variável name existe aqui?', name);
{
  // escopo (bloco de código), entre chaves
  //Local
  let name = 'Akbar';
}
console.log('Variável name existe aqui?', name);
*/
//////////////////////////////////////////////////////////////////////////

// Neste exemplo vai ficar claro a diferença entre variável global e local

/*let name = 'Akbar';

console.log('Meu nome chegou aqui?', name);

{
  // escopo (bloco de código)
  //local

  let name = 'Miranda';
  console.log('Meu nome chegou aqui?', name);
}

console.log('Meu nome chegou aqui?', name);*/

//////////////////////////////////////////////////////////////////////////////

//Objetos

//Abaixo temos um exemplo de um objeto
/*
const human = {
  name: 'Akbar Miranda',
  age: 48,
  weigh: 115,
  isAthlete: false,
  // Aqui está sendo declarado um atributo que recebe uma função
  walk: function walking() {
    console.log('Eu ando bastante');
  },
};
console.log(human);
// No exemplo abaixo estamos dizendo dentro do console.log que a variável
//é um objeto colocando entre aspas. Muda a forma como o console do browser
//nos mostra
console.log({ human });
//neste exemplo abaixo exibo apenas o atributo age da variável.
console.log(human.age);
// Imprimindo a função walk dentro da variável name
console.log(human.walk());
//concatenar
console.log('O humano ' + human.name + ' tem a idade ' + human.age);
//Interporlação
console.log(`O humano ${human.name} tem a idade ${human.age}`);
*/

/////////////////////////////////////////////////////////////////////////

// Arrays
// Esta é uma array de 4 elementos. Arrays sempre começam
// com índicie 0. Neste exemplo... 0 = Elefante e assim por diante
/*const animals = [
  'Elefante',
  'Gato',
  'Leão',
  'Cachorro',
  {
    // colocando um objeto dentro de uma array
    name: 'Moacir',
    age: 2,
    weight: 4,
  },
];

//lenght (tamanho 4)
console.log(animals.length);
// Imprimindo toda a array
console.log(animals);
// Imprimindo um elemento específico da array
// Você escolhe pelo índicie
console.log(animals[2]);
console.log(animals[0]);
console.log(animals[4]);
// imprimindo um atributo específico do objeto dentro da array
console.log(animals[4].name);*/
