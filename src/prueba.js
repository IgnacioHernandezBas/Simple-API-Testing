let a=5   // con let se crean variables que se pueden modificar
const b=5 // const indica una variable que no se puede cambiar,una constante inalterable.
if(a==b){
  console.log("son iguales")
}

let lista=[1,2,3,4,5,6]      // creamos una lista

for (let elemento of lista){ // Esto eqivaldría a un for each.
  console.log(elemento);
}

let a_num=3
let a_str="3"

if (a_str==a_num){
  console.log("Son iguales a diferencia del tipo");
}



if (a_str===a_num){  // con el triple igual indicamos que tienen que ser iguales tanto como en contenido como en tipo
  console.log("Son iguales totalmente")
}else{
  console.log("No son iguales totalmente")
}

//Creación de objetos
let persona = {
  nombre:"Antonio",
  apellido:"Hdez",
  edad:20,
};
console.log(persona);
console.log("Nombre: "+persona.nombre)

function imprimirMensaje(mensaje){  // Creación de funciones en modo facil
  console.log(mensaje)
}

let  imprimirMensaje = (mensaje) => { // Forma más óptima aunque más complicada
  console.log(mensaje)
}

//imprimirMensaje("Hola Mundo")

//----------Función que llama a funcion---------------//
let llamarFuncion =(funcion) =>{
  const mensaje="Nachets"
  funcion(mensaje);
}

llamarFuncion(imprimirMensaje)