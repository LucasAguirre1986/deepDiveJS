function factorialIterativo(valor) {
  var acum = 1;
  for (var i = 1; i <= valor; i++) {
    acum *= i;
  }
  return acum
}
function factorial(valor) {
  if(valor==0) return 1;
  return valor * factorial(valor-1);
}
function fib(valor) {
  if (valor <=1) return 1;
  return fib(valor-2) + fib(valor-1);
}

function factores(num, arr=[]) {
  if(num===1) return arr;
  for (var i = 2; i <= num; i++) {
    if(num%i==0){
      arr.push(i);
      return factores(num / i, arr);
    }
  }
}
