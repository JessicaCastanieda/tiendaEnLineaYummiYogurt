var dia = document.getElementById("dia");

function getHours() {

var fecha = new Date();

// console.log(fecha);

var hora = {

hora: fecha.getHours(),

minutos: fecha.getMinutes(),

segundos: fecha.getSeconds(),

dia: fecha.getDay(),

mes: fecha.getMonth(),

year: fecha.getFullYear()

}

var meses = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

var dias = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']

// console.log(hora.year);

dia.innerHTML = `${dias[hora.dia]} - ${meses[hora.mes]} - ${hora.year} \n ${hora.hora} : ${hora.minutos} : ${hora.segundos}`

}

setInterval(() => {

getHours()

}, 1200);

// date regresa arreglos: dias y meses

// diccionario codigo <--> usuario

/*//array es un conjunto de daot tanto primitiovs ocmo complejos

//obj = {}

//array = []

//IMPORTANTE los arreglos incian en el indice 0

var meses = ['Enero', 'Feb', 'marzo', 'abril'];

var dia = ['dom', 'lun', 'martes'];

var edad = [1, 2, 3, 4, 5, 6];

var persons = [

{ nombre: 'carlos', edad: 30 },

{ nombre: 'juan', edad: 50 },

{ nombre: 'angela', edad: 20 },

{ nombre: 'montse', edad: 40 },

];

//acceder al arreglo p0r medio del indice ocupamos [] corchetes seguido del nombre del arreglo sin espacio y entro del corchete indicamos el indice al que queremos apuntar

console.log(persons[3]);

//notación de punto par objetos

console.log(persons[3].edad); */