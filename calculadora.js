// Aqui é criada uma função insert que primeiro recebe um elemento 'num'
// criasse a variável numero que vai buscar o elemento (document.getElementById)
// 'resultado'dentro do html (innerHTML). Após receber esse elemento ele da a
// variável 'numero' o valor que vai ser inserido no HTML

function insert(num) {
  var numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
}

// Aqui criasse a função chamada 'clean' que insere o elemento vazio '' na tela de resultado
//efetivamente apagando o que havia escrito lá.
function clean() {
  document.getElementById('resultado').innerHTML = '';
}
//Aqui criasse a função chamada 'back' que ao exemplo das anteriores vai no
//elemento resultado da página HTML que através do método 'substring' vai na
//posição zero (mais a direita) e recua um, funcionando como um backspace do
//teclado
function back() {
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}
//Aqui se cria a função chamada 'calcular', que a principio não recebe nenhum
//elemento '()' e agora da um novo valor a variável resultado de acordo com a
//operação desejada. Primeiro ele vai no elemento no HTML recebe a informação,
//'resultado', depois disso, ele coloca uma condição 'if' primeiro avaliando o resultado,
//através do método (eval). Caso ele exista, seré exibido na tela caso não,
//não aparecera nada
function calcular() {
  var resultado = document.getElementById('resultado').innerHTML;
  if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado);
  } else {
    document.getElementById('resultado').innerHTML = 'Nada...';
  }
}
