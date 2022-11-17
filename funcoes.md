## O que é uma Função JavaScript?

Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.

Uma função JavaScript é executada quando "algo" a invoca (chama)

Uma função JavaScript é definida com a palavra - function chave, seguida por um nome, seguido por parênteses ().

Os nomes das funções pode conter letras, digitos, sublinhados e cifrões (mesmas regras das variáveis).

Os parênteses podem incluir nomes de parâmetros separados por vírgulas: (parâmetro1, parâmetro2...)

O código a ser executado pela função, é colocado entre chaves: {}

# Documentação https://www.w3schools.com/js/js_functions.asp

# Anatomia Function

functio myFunction () {
// My Code
}

# Anatomia Function Anonymous

const myFunction = function () {
//My code
}

# Execução

myFunction ()

# Parâmetros da função

function myFunctionparameters(parameter1, parameter2) {
//Mycode
}

# Argumentos de execução

## Teoria do prato de comida

Vou montar meu prato de comida para almoçar

function almocar (comida1, comida2, comida3) {
return `Meu almoço teve ${comida1}, ${comida2}, ${comida3}`;
}

//Preciso de um prato para armazenar a comida

const prato = almocar('arroz', 'feijâo','frango')
console.log(prato)

## Arrow Function, maneira mais moderna de criar uma função

# Exemplo

const arrowFuntion = () => {
console.log('Arrow Function')
}

arrowFunction()

# Exemplo com parâmetros e retorno

const arrowFunction = (num1, num2) => {
total = num1+ num2
return total
}

const result = arrowFunction(90,20)
console.log(result )
