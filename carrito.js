let form = document.getElementById("submit")
let validarContraseña = document.getElementById("exampleInputPassword1");

form.addEventListener('click',function(){

})

let botonCompra = document.getElementById("botonCompra")
botonCompra.addEventListener("click", function () {
  if(validarContraseña.value.length < 8){
    alert("La contrasena debe ser de mas de 8 caracteres ")
  }else{
    alert("contrasena correcta")
  }
document.getElementById(
  "parrafoCompra"
).innerText = `Tu Compra fue aceptada.
 Enviamos un E-mail con toda la informacion para realizar  el pago y sobre la salida de la excursion.
 Tambien enviamos la informacion necesaria para el dia de la aventura, gracias popr confiar en Montaña Andina !!`;
  Swal.fire({
    title: 'Tu compra fue agregada a nuestro sistema con exito !!',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })

});

let listaF = document.getElementById("listaF");
listaF.innerHTML = `<ul><li>INSTAGRAM</li><li>FACEBOOK</li><li>WATHSAAP</li></ul>`;
