//for - Usado quando sabemos aonde vai parar
//for (inicio; condição; iteração) incremento;
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//ao contrário (decremento)
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
//usando o break ele para antes do 5
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
//usando o continue ele pula o 5
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

//While - Usado quando não sabemos aonde vai parar

let interator = 1;
while (interator <= 20) {
  console.log(interator);
  //incremento
  interator++;
}

//for of
//Array

let number = [2, 3, 4, 5, 6];
{
  for (num of number) {
    // if (num > 4) com essa opção,
    //só imprime os valores maiores que 4
    //for of mostra os VALORES DO ARRAY
    //(não importa qual o tipo do valor)
    {
      console.log(num);
    }
  }
}

// for in
let animals = {
  name: 'leão',
  weight: 200,
  age: 4,
};

for (item in animals) {
  // para me informar os atributos (itens do meu objeto)
  console.log(item);
  // para imprimir os atributos e em seguida os valores
  console.log(animals[item]);
  // para imprimir todo o meu objeto
  console.log(animals);
  //para imprimir o valor de um objeto específico
  console.log(animals['age']);
  console.log(animals.name);
}

let arrayName = ['zé', 'luis', 'silva', 'sauro'];
for (item in arrayName) {
  console.log(arrayName); //mostra todo array
  console.log(arrayName[item]); //mostra os itens
  console.log(arrayName[2]); //mostra um ítem específico
  console.log(item); // Index dos vetores (posições)
}
