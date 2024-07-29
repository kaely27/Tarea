//Imprimir en consola si el valor de la variable 'numero' es par o impar
let numero = 10;
let resultado;
resultado = numero % 2 === 0 ? "El numero es par" : "El numero es impar";
console.log(resultado);
//Imprimir en consola si el valor de la variable 'edad' es mayor de edad  o menor de edad.
let edad = 10;
console.log(edad >= 18 ? "Es mayor de edad" : "Es menor de edad");
//Imprimir si el estado de conexion de la variable 'conexion' (boolean) es "En linea" o "Desconectado"
let conexion = true || false;
console.log(conexion ? "Esta en linea" : "Desconectado");
//Imprimir si el valor de la variable 'x' es negativo o positivo
let x = -6;
console.log(x < 0 ? "Es negativa" : "Es positiva");
//Crea un programa que determine si se aplica un descuento a un precio. 
//Si el precio es mayor o igual a $100, aplica un descuento del 10%. Caso contrario, no hay descuento. 
//Tienes que imprimir "El precio final del producto es... ${precio}"
let precio = 98;
let descuento = 0.1;
let operacion = precio * descuento;
let r = precio - operacion
console.log(precio >= 100 ? `El precio final es: ${r}` : `El precio es: ${precio}`);


