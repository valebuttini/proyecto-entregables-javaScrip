// Creacion de objetos desafio
const desafios = [{
  id: 1,
  foto: "./imagenes/4-cascadas.jpg",
  nombreDesafio: "Las 4 Cascadas",
  precio: 2000,
  dificultad: 2,
  horas: 3,
  descripcion:
    "Treking apto para personas que les gusta experimentar cosas nuevas",
},
{
  id: 2,
  foto: "./imagenes/lasAgatas.jpg",
  nombreDesafio: "Las agatas",
  precio: 1500,
  dificultad: 4,
  horas: 3,
  descripcion:
    "Treking apto para aquellos que estan acostumbrados a salir de treking seguido, especial para no perder el ritmo!!",
},
{
  id: 3,
  foto: "./imagenes/montañaBlue.jpg",
  nombreDesafio: "Montañana el Blue",
  precio: 2800,
  dificultad: 4,
  horas: 4,
  descripcion:
    "Este treking se adapta a todas las dificultades de montañana para un experimentado, animate!!",
},
{
  id: 4,
  foto: "./imagenes/cerro360.JPG",
  nombreDesafio: "Cerro 360",
  precio: 3000,
  dificultad: 5,
  horas: 6,
  descripcion:
    "¿ Estas buscando mejorar tu habilidad en montañana ?",
},
{
  id: 5,
  foto: "./imagenes/lagoTigre.jpg",
  nombreDesafio: "Lago EL tigre",
  precio: 3000,
  dificultad: 3,
  horas: 1,
  descripcion:
    "Treking apto para toda la familia !!",
},
{
  id: 6,
  foto: "./imagenes/cerroGallo.JPG",
  nombreDesafio: "Cerro Gallo",
  precio: 1400,
  dificultad: 5,
  horas: 3,
  descripcion:
    "Si buscan ver paisajes, entonces deben conocer el cerro Gallo",
},
];
// logica para la creacion de las cards 

let carrito = [];
  document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('carrito')){
      carrito = JSON.parse(localStorage.getItem('carrito'))
      console.log(carrito)

    } })


let card = document.getElementById("card1");

renderizarDesafios();
function renderizarDesafios() {
  for (const desafio of desafios) {
    card.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${desafio.foto}" class="card-img-top" alt="..">
               <div class="col-xxl-2">
                  <div class="card-body">
                      <h4 class="card-title">${desafio.nombreDesafio}</h4>
                      <h5 class="card-title">Id: ${desafio.id}</h5>
                      <h5 class="card-title">Horas: ${desafio.horas}</h5>
                      <p class="card-text">${desafio.descripcion}</p>
                      <p class="card-text">Dificultad: ${desafio.dificultad}</p>
                      <p class="card-text">Precio P/P: $${desafio.precio}</p>
                      <button class='btn btn-danger' id='btn${desafio.id}'>Comprar</button>
                  </div>
              </div>
            </div>
        `;
  }
}


(() => {
  const verCarrito = document.getElementById('verCarrito');
  const cancelar = document.getElementById('cancelar');
  const dialog = document.getElementById('formulario');

  // Mostrar carrito
  verCarrito.addEventListener('click', () => {
    dialog.showModal();
  });

  // cerrar carrito
  cancelar.addEventListener('click', () => {
    dialog.close();
  });

})();

// // eventos del boton por id dinamico
desafios.forEach((desafio) => {
  document.getElementById(`btn${desafio.id}`).addEventListener("click", function () {
    agregarAlCarrito(desafio);
  });
});

// creacion de tabla carrito
function agregarAlCarrito(desafio) {
  carrito.push(desafio);
  document.getElementById("tablaBody").innerHTML+=`
      <tr>
          <td>${desafio.nombreDesafio}</td>
          <td>${desafio.horas}</td>
          <td>${desafio.precio}</td>
          <td>Total</td> 
      </tr>
   `;
   alert("Producto "+desafio.nombreDesafio+" agregado al carrito!");
   localStorage.setItem('carrito', JSON.stringify(carrito));
  
}

let listaF = document.getElementById("listaF");
listaF.innerHTML = `<ul><li>INSTAGRAM</li><li>FACEBOOK</li><li>WATHSAAP</li></ul>`;
