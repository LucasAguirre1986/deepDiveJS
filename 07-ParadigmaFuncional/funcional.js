function duplicar(valor){
  return valor *2;
}
function map(arr,fn){
  for (var i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i])
  }
  return arr;
}
function filter(arr, fn){
  var newFilter = []
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newFilter.push(arr[i])
    }
  }
  return newFilter;
}
function contains(arr,num){
  for (key in arr) {
     if (arr[key]===num) return true;
  }
  return false
}
function cuentaPalabras(str){
  return str.split(' ').length
}

function reduce(arr, value, fn){
var acum = value;
  for (var i = 0; i < arr.length; i++) {
    acum=fn(acum, arr[i])
  }
  return acum
}
function cuentaPalabrasReduce(acum,str){
  let cant = cuentaPalabras(str);
  return acum + cant;
}
function suma(arr){
  var sumar = (a, b)=> a + b;
  return reduce(arr,0, sumar);
}
function every(arr, fn) {
  if(arr.length === 0) return true;
  // Nueva funcion --
  var newFn = function(acum, num){
    let valor = fn(num);
    if (valor) return acum += 1;
    return acum
  }
  var total = reduce(arr,0,newFn)
  // compara la cantidad encontrada vs el largo del Arreglo
  if(total === arr.length) return true;
  return false;
}
function any(arr, fn) {
  if(arr.length === 0) return false;
  // Nueva funcion --
  var newFn = function(acum, num){
    let valor = fn(num);
    if (valor) return acum += 1;
    return acum
  }
  var total = reduce(arr,0,newFn)
  // compara la cantidad encontrada vs el largo del Arreglo
  if(total === 0) return false
  if(total === arr.length) return false;
  return true;
}
