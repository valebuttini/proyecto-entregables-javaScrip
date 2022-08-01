function solicitarDestino() {
  let destino = prompt("Elige e Ingrese su destino  \nValle Grande \nLos Reyunos \nEl Tigre " );
  alert("su destino elegido   es " + destino);
}
let cantidadPersonas=0;
function solicitarCantidad() {
  cantidadPersonas = parseInt(prompt("Ingresar cantidad de personas a realizar la excursion en numeros"));
  alert("La cantidad de personas  es " + cantidadPersonas);
  
}

function edad() {
  let edad = prompt("ingrese si son (Mayor de edad o Menor de edad)");
  switch(edad) {
    case "Mayor de edad":
    case "mayor de edad":
    case "MAYOR DE EDAD":  
      alert("si puede realizar el treking");
      break;
    case "Menor de edad":
    case "menor de edad":
    case "MENOR DE EDAD":  
      alert("no puede realizar el treking")
      break;
    default:
      alert("ingrese la edad")
      let edad = prompt("ingrese si son (Mayor de edad o Menor de edad)");
      break;
   }   
}
let ESPACIO = " ";
num1=1000;
let multiplicacion=0;
function calcularPrecio() {
  multiplicacion= cantidadPersonas*num1;
  alert("el precio final para" + ESPACIO + cantidadPersonas + ESPACIO + "personas (MAYORES DE EDAD)" + ESPACIO + "es " + multiplicacion)
}


solicitarDestino();
solicitarCantidad();
edad();
calcularPrecio();
