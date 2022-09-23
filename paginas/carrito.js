
let botonCompra = document.getElementById("botonCompra")
botonCompra.addEventListener("click", function () {
 
document.getElementById(
  "parrafoCompra"
).innerText = `Tu Compra fue aceptada.
 Enviamos un E-mail con toda la informacion para el pago y sobre la salida de la excursion`;
  Swal.fire({
    title: 'Custom animation with Animate.css',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
});







// let messi = localStorage.getItem("carrito");
// let cristiano = JSON.parse(messi);
// let yaya = toString(cristiano);
// console.log(yaya);
// let cristiano = messi.substring(2,20)
// console.log((cristiano))
// document.getElementById(
//   "productoCarrito"
// ).innerText = `Producto en carrito:  ${cristiano}`;
let listaF = document.getElementById("listaF");
listaF.innerHTML = `<ul><li>INSTAGRAM</li><li>FACEBOOK</li><li>WATHSAAP</li></ul>`;
