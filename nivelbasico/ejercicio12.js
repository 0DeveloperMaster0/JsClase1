//Condicional Switch - Solo puede validar una condicion

let nobre = prompt("Inngresa tu Nombre");
let edad = prompt("Cuantos Años tienes?");

switch (edad) {
  case "18":
    alert("Accseso Permitido");
    break;

  case "25":
    alert("Acceso Permitido");
    break;

  case "35":
    alert("Acceso Permitido");
    break;

  default:
    alert("Acceso Denegado");
    break;
}
