var opcion= parseInt(prompt("Escoja una operación:\n" +"1.Suma\n"+ "2.Resta\n"+"3.Multiplicación\n"+"4.División\n"+"5.Residuo\n"+"6.Mayor\n"+"7.Menor\n"+"8.igualdad"))
if(opcion<=0||opcion>=9){
	document.write("La opción es inválida")
}
else{
var numero1= parseInt(prompt("Ingresa el # 1"))
var numero2= parseInt(prompt("Ingresa el # 2"))
switch(opcion){
	case 1:
		var suma= numero1 + numero2;
		document.write("La suma es " + suma);
		break;
	case 2:
		var resta= numero1 - numero2;
		document.write("La resta es " + resta);
		break;
	case 3:
		var multiplicacion= numero1 * numero2;
		document.write("La multiplicación es " + multiplicacion);
		break;
	case 4:
		var division= numero1 / numero2;
		document.write("La división es " + division);
		break;
	case 5:
		var residuo= numero1 % numero2;
		document.write("El residuo es " + residuo);
		break;
	case 6:
		var mayor= (numero1 > numero2);
		if(mayor){
			document.write("El # mayor es "+ numero1);
		}
		else{
			document.write("El # mayor es " + numero2);
		}
		break;
	case 7:
		var menor= (numero1 < numero2);
		if(menor){
			document.write("El # menor es "+ numero1);
		}
		else{
			document.write("El # menor es " + numero2);
		}
		break;
	case 8:
		var igualdad= (numero1 == numero2);
		if(igualdad){
			document.write("Ambos números son iguales");
		}
		else{
			document.write("Ambos números son diferentes");
		}
		break;
}
}