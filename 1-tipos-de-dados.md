## Tipo de dados do Javascript

## Entendendo a Sintaxe

-> É necessário seguir regras de linguagem
-> Combinações de elementos e escrita
-> Conjunto de termos e expressões
-> Agrupamento de palavras

---

## Tipo String

      * Cadeias de caracteres *
      Exemplo: Textos

      Documentação:
      https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

# Regras

    "" // aspas duplas
    '' // aspas simples
    `` // template literals ou template strings (crase)

# Tipo Number

    * Números
     Documentação:
     https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number

     33 -> Inteiros - Integer
     12.5 -> reais, decimais ou float
     Nan -> Not a Number
     Infinity -> Infinito

---

# Tipo Boolean

    * Somente 2 valores
    Criado por George Boole
    Documentação:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Boolean

    true -> verdadeiro
    false -> falso

# Tipo undefined

    *indefinido

    Documentação:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/undefined

# null

    * nulo
    * objetivo que não possui valor
    * diferente de indefinido

    Documentação:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/null

# Tipo Object

- Objeto que armazena:
  -> Propriedades / Atributos
  -> Funcionalidades / Métodos

  {propiedade: "valor"}

  Documentação:
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object

# Tipo Array (vetores)

-> Lista de valores
-> Agrupamento de dados

["Carro", 32, "Moto"]

# Segundo o ECMAScript Standard

Documentação:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects

- Tipos de dados (Data Types)
  -> Primitives / Primitives value (Primitivos)
  -> Structural (Estrutural)
  -> Structural Primitives (Primitivo Estrutural)

# Conhecendo e trabalando com variáveis

## Variáveis

- Nome, identificação ou apelido dado para algum valor
- Utiliza espaços de memória ram para armazenar informações
- Esses valores podem variar de acordo com o tempo ou podem ser constantes
- Palavras reservadas para construir uma variável

-> var
Variável que pode sofrer mudanças de valor ao longo do tempo

-> let
Variável que pode sofrer mudanças de valor ao longo do código, geralmente usado dentro do escopo(Bloco de código)

-> const
Variável constante, não pode receber outro valor, seu valor é fixo em todo o código

## Variáveis fracamente tipada e dinâmica vs fortemente tipada

-> o Javascript é uma linguagem fracamente tipada e dinâmica
-> As variáveis não precisam declarar previamente seu tipo de dados
-> Dinâmico na troca de valores de uma variável

## Exemplo:
