function crearCalculadora(){
	var acum = 0
	var calculadora={}
	calculadora.valor=function(){
		return acum
	}
	calculadora.sumar=function(sum){
		return acum += sum;
	}
	calculadora.restar=function(sum){
		return acum -= sum;
	}
	calculadora.reset=function(sum){
		return acum = 0;
	}
	return calculadora;
}

