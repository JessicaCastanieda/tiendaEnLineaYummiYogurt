console.log("app");

// n-1 inicio de arrays
let productos=["yogurt Mango", "yogurt fresa","yogurt manzana","yogurt piña coco","yogurt natural"]

// recuperar un elemento del array
//[aqui va el numero del elemento que estamos llamando en la consola] "[2]"
let producto = productos[0];
console.log(productos[3]);

//´ciclos for, while, do while todo los lenguajes

//iteracion es una accion de acion de principio a fin del punto x al punto y 0 de 0 a 100

//necesita de 3 parametros() por ";" para funcionar

//1)inicializar un centinela o variable que me perita contolar las repeticiones(inicializan en 0)
//2)fijar un limite de repeticiones"uso de operadores logicos" < > <= >= ==
//3)incremento x = x +1 x++ incremento en 1 [x]++ sugar sintaxis

//verboso el choro
//declarar
// para cada a que vale 0 y mientas a sea menor a 7000 y que a aumenta en 1, realiza:{}
/* for(let a =0; a < 70; a++){

    //instrucciones de lo que va a realizar el for
    console.log("usuario",(a+1));

} */

// length es para la longitud del arreglo
console.log(productos.length);

for(let x = 0; x < productos.length; x++){
    let producto = productos [x]
    console.log(producto);
}