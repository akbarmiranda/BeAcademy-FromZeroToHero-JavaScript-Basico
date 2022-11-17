//Comentário em linha

/*
Comentário em bloco

*/
//Observe a diferença entre as aspas
console.log('Olha eu no "aspas" simples !!');
console.log("Olha eu no 'aspas' duplas !!");
//Observe que com crase não tem problemas.
//Pondendo até quebrar o texto que ele vai entender
console.log(`Olha eu no 
"aspas" 'duplas'
 !!`);

console.log(12); // Integer
console.log(24.5); //Float
console.log((12 * 24) / 4); // calc
console.log(Infinity); // Infinito
console.log(50 + 53 * 4.5); // Calc
console.log(Math.round(50 + 53 * 4.5)); //Arredonda o número
console.log(24 > 32); //Boolean
console.log(null === undefined);
// Objeto
console.log({
  marca: 'FIAT',
  largura: '550cm',
  peso: 1,
  velocidade: 90 * 200 * 2,
  andar: function () {
    console.log('Sua velocidade é de 200');
  },
});

//Array
console.log(['Bolacha', 'Coca-cola', 'Verdura', 'água']);
