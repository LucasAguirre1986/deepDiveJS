function Mamifero(nombre){
  //constructor
  this.nombre = nombre;
  this.descendencia = [];
}
// prototype agrega una nueva propiedad al constructor
Mamifero.prototype.saludar=function(){
  return `Hola, mi nombre es ${this.nombre}`;
}
Mamifero.prototype.nuevoHijo=function(){
  var hijo = new Mamifero(this.nombre + ' Jr')
  this.descendencia.push(hijo);
  return hijo
}

function Gato(nombre, color){
  Mamifero.call(this, nombre);
  this.color = color;

}

Gato.prototype.saludar=function(){
  var obj = Object.create(Mamifero.prototype)
  obj.nombre = this.nombre
  return obj.saludar()
}

Gato.prototype.nuevoHijo = function(color){
    var hijo = new Gato(this.nombre + ' Jr', color)
    this.descendencia.push(hijo);
    return hijo;
}
//==========================
//function Prueba(val,val2){
// 	this.valor = val;
// 	this.valor2 = val2;
// }
// instancia = new Prueba(1,2)
// Object { valor: 1, valor2: 2 }
// instancia.valor
// 1
// Prueba.prototype.valor3=3
//
// Mamifero.prototype ={
//       saludar:function(){
//         return `Hola, mi nombre es ${this.nombre}`;
//       },
//       otra:function(){
//         return `Hola, mi nombre es ${this.nombre}`;
//       }
//   }
