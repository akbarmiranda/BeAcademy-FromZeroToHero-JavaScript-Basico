// 1. Declare uma variável de nome person

// 2. Que tipo de dado é a variável acima?

/* 3. Declare uma variável e atribua valores para cada um dos dados
  *name: string
  *age: Number (integer)
  *weight: Number (float)
  *isAdmin: Boolean
  *isAMan: Boolean

*/

/*

    4. A variãvel human abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores 
    do exercício 3.

    4.2 Mostre no console a seguinte mensagem.:
    O humano <name> tem o peso  <weight> kg.

    let human = {}
    console.log(human)

    5. Declare uma variável do tipo Array, de nome humans e atribua 
    a ela nenhum valor, ou seja, somente o Array vazio.

    let humans =[]

    6. Reatribua valor para a variável acima, colocando dentro dela
    o objeto da questão 4. (Não copiar e colar o objeto, mas usar o 
    objeto criado e inserir ele na Array)

    7. Coloque no console o valor da posição zero do Array acima
    
    console.log(humans[0]);

    8. Crie um novo objeto student e coloque na posição 1 do Array students
    
    const = NewHuman{
    name: 'João da Silva', 
    age: 28, 
    weight: 90, 
    isAdmin: true, 
    isAMan: true, 
  }

  humans = [human,NewHuman]

  ou

  humans[1] = NewHuman
    
    9. Sem rodar o código responda o resultado da saída abaixo:

    a)
    console.log(a);
    var a = 1
    saida -> undefined

    b)
    let a //variável global
    console.log(a);
    { let a = 2 //variável local
    console.log(a)
    }
    console.log(a)
  saida -> undefined, 2 undefined

    c)
    console.log(b)
    {
      let b = 3
      console.log(b)
    }

    console.log(b)

   saida -> reference error b nâo estava declarada no escopo 
   global

    d)
    const c = 10
    {
      console.log(c)
      const c = 20
      console.log(c)
    }
    saida -> reference error const nâo aceita mudança de valor
  
  
    */

// EXERCÍCIO respondido

let person = 'Akbar'; //tipo string, sem valor será undefined
console.log(person);
console.log(typeof person);

////////////////////////

let human = {
  name: 'Akbar', //tipo string
  age: 48, //tipo integer
  weight: 115, //tipo float
  isAdmin: true, //tipo boolean
  isAMan: true, //tipo boolean
};

console.log({ human });

console.log(`O humano ${human.name} tem o peso de ${human.weight}`);

/////////////////////////

let humans = [human];
console.log(humans);
console.log(humans[0].name, humans[0].weight);

/////////////////////////

const NewHuman = {
  name: 'João da Silva',
  age: 28,
  weight: 90,
  isAdmin: true,
  isAMan: true,
};
console.log(NewHuman);

////////////////////////

humans[1] = NewHuman;

console.log(humans);
