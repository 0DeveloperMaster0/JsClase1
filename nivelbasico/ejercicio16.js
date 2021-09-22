//DOM - Document Object Mode1 . Js Puede acceder al DOM(Estructura del DOCUMENTO HTML), y a travez de el 
//puedemodificar la pagina,de hecho, puede modificar todos los estilos CSS, eliminar o añadir elementos y 
//atributos relacionados con la pagina, tambien reacciona a todos los eventos de la pagina

//Obtener elemento del HTML

//Variable Global
let datos = document.getElementById("datos")

//funcion
const nombreUsuario = () =>{

let nombre = prompt("Ingresa tu nombre")
alert(" Tu nombre es " + nombre)
}

//Funcion vacia
datos.onclick = function () {

nombreUsuario();

}

















