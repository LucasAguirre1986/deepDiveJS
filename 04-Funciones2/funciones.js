function concatenar(...resto){
	var string ="";
	for (var i = 0; i < resto.length; i++) {
		string +=resto[i];
	}
	return string;
}


function invocarFunciones(fn, fn2=""){
	if (fn2!='') return fn() + fn2()
	return fn();
}

function creadorDeIncrementos(num){
	return function (mult){
		return num + mult;
	}
}
function invocacionUnica(fn){
	var valor = 1
	return function(){
		if (valor == 1) {
			fn()
			valor = 2
		}
	}
}

function objetoConClousure(){
	var valor = 0
	return {
		incremento:function(){
			valor += 1;
		},
		incrementoPor10:function(){
			valor += 10;
		},
		pedirValor:function(){
			return valor
		},
		cambiarValor:function(val){
			valor = val
		}
	}
}

function ListaDeFuncionesInvitados(arregloInvitados, codigoSecreto){

    var funcionesInvitados=[];
   
    for (let i = 0; i < arregloInvitados.length; i++) {
    	funcionesInvitados[i]=function(secreto){
    		
    		if (secreto!=codigoSecreto) return 'código secreto: invalido'    		
    		return arregloInvitados[i]
    	};
    }

	return funcionesInvitados;
}

function armarListaDeInvitados(funcionesInvitados, codigoSecreto){
	var listaOficial =[]
	console.log(funcionesInvitados)

	for (var i = 0; i < funcionesInvitados.length; i++) {
		listaOficial.push(funcionesInvitados[i](codigoSecreto))
	}
	return listaOficial

}
