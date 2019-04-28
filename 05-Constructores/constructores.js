function CalculadoraNPI(){
	this.arr=[];
	this.resultado=0;


}

CalculadoraNPI.prototype.agregar =function(value){
	this.arr.push(value)
	
}

CalculadoraNPI.prototype.sumar =function(value){
	if(this.arr.length < 1){
			throw 'La calculadoraNPI necesita por lo menos 2 números'
	}
	
	var largo = this.arr.length
	var total = this.arr[largo-2] + this.arr[largo-1];
	this.resultado = total;
	// eliminar los ultimos 2
		this.arr.splice(largo-2);
	// pushear total
		this.arr.push(total)
	//console.log(isNaN(this.arr[0]))
		
	//console.log(this.arr)
}
CalculadoraNPI.prototype.dividir =function(value){
	if(this.arr.length < 1){
			throw 'La calculadoraNPI necesita por lo menos 2 números'
	}
	var largo = this.arr.length
	var total = this.arr[largo-2] / this.arr[largo-1];
	this.resultado = total;
	// eliminar los ultimos 2
		this.arr.splice(largo-2);
	// pushear total
		this.arr.push(total)

	//console.log(this.arr)
}
CalculadoraNPI.prototype.multiplicar =function(value){
	if(this.arr.length < 1){
			throw 'La calculadoraNPI necesita por lo menos 2 números'
	}
	var largo = this.arr.length
	var total = this.arr[largo-2] * this.arr[largo-1];
	this.resultado = total;
	// eliminar los ultimos 2
		this.arr.splice(largo-2);
	// pushear total
		this.arr.push(total)

	//console.log(this.arr)
}
CalculadoraNPI.prototype.restar =function(value){
	if(this.arr.length < 1){
			throw 'La calculadoraNPI necesita por lo menos 2 números'
	}
	var largo = this.arr.length
	var total = this.arr[largo-2] - this.arr[largo-1];
	this.resultado = total;
	// eliminar los ultimos 2
		this.arr.splice(largo-2);
	// pushear total
		this.arr.push(total)

	//console.log(this.arr)

}
CalculadoraNPI.prototype.valor =function(value){
	
	return this.resultado;
}


/*
    calculadora.agregar(2); [2]
    calculadora.agregar(3); [2,3]
    calculadora.agregar(4); [2,3, 4]
    calculadora.sumar(); [2,7]

    return asas.ken

*/
