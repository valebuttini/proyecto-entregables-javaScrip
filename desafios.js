// cambio de contenido de un texto por JS
let cambioTitulo = document.getElementById("cambioTitulo");
cambioTitulo.innerText = "20% DE DESCUENTO EN TODOS NUESTROS TREKINGS";

let botonTarjetasDesafio=document.getElementById("botonCarta");
botonTarjetasDesafio.addEventListener("click",hacer);
function hacer(){
 alert("sos mayor de edad?")
 prompt("indicar si o no");
}



let listaF = document.getElementById("listaF");
listaF.innerHTML = `<ul><li>INSTAGRAM</li><li>FACEBOOK</li><li>WATHSAAP</li></ul>`;
