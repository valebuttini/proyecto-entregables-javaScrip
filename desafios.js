// Creacion de objetos desafio
const desafios = [
  {
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
    descripcion: "¿ Estas buscando mejorar tu habilidad en montañana ?",
  },
  {
    id: 5,
    foto: "./imagenes/lagoTigre.jpg",
    nombreDesafio: "Lago EL tigre",
    precio: 3000,
    dificultad: 3,
    horas: 1,
    descripcion: "Treking apto para toda la familia !!",
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
// Eleccion del tiempo con operador &&
// en grados celcius

let tiempoVeranoMendoza = 30; 
let estacion = "verano";

let tiempoInviernoMendoza = 10;
let estacionInvierno = "invierno";

let tiempoPrimaveraMendoza = 20;
let estacionPrimavera = "primavera";

let tiempoOtonoMendoza = 15;
let estacionOtono = "otono";


(tiempoVeranoMendoza==30)&&(estacion=="verano") ? console.log("puede salir de treking") : console.log("No")




// let seleccionar = document.getElementById('tiempo');
// let primerNum = document.getElementById("primerNum")

// seleccionar.addEventListener('change', (e) => {
  
//   tiempoVeranoMendoza.push(primerNum)
//   alert(tiempoVeranoMendoza)
//  });


// recuperar datos del storage con evento al ingresar a la pagina y mostrarlos por consola

let carrito; 
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
     carrito = JSON.parse(localStorage.getItem("carrito"));
     carrito.map((desafio)=>{
      document.getElementById("tablaBody").innerHTML += `
      <tr>
          <td>${desafio.nombreDesafio}</td>
          <td>${desafio.horas}</td>
          <td>${desafio.precio}</td>
          <td><input id="" type="number" value="" min="1" max="1000" step="1" style="width: 50px;"/></td>
          <td>Total</td> 
      </tr>
   `;
     })
  }else{
    carrito = [];
  }
});

// logica para la creacion de las cards
let card = document.getElementById("card1");

renderizarDesafios();
function renderizarDesafios() {
  for (const desafio of desafios) {
    card.innerHTML += `
            <div class="card" style="width: 12rem;">
            <img src="${desafio.foto}" class="card-img-top" alt="..">
               <div class="col-xxl-2">
                  <div class="card-body">
                      <h4 class="card-title">${desafio.nombreDesafio}</h4>
                      <h5 class="card-title">Horas: ${desafio.horas}</h5>
                      <p class="card-text">${desafio.descripcion}</p>
                      <p class="card-text"><b>Dificultad:</b> ${desafio.dificultad}</p>
                      <p class="card-text"><b>Precio</b> P/P: $${desafio.precio}</p>
                      <button class='btn btn-success' id='btn${desafio.id}'>Comprar</button>
                  </div>
              </div>
            </div>
        `;
  }
}

// carrito de compras con formulario y eventos en los botones para desplegar y cancelar
(() => {
  const verCarrito = document.getElementById("verCarrito");
  const cancelar = document.getElementById("cancelar");
  const dialog = document.getElementById("formulario");

  // Mostrar carrito

  verCarrito.innerHTML+=`
  <button type="button" class="btn btn-success">Ver Mi Carrito</button>
  `
  verCarrito.addEventListener("click", () => {
    dialog.showModal();
  });

  // cerrar carrito
  cancelar.addEventListener("click", () => {
    dialog.close();
  });
})();

// // eventos del boton por id dinamico
desafios.forEach((desafio) => {
  document
    .getElementById(`btn${desafio.id}`)
    .addEventListener("click", function () {
      agregarAlCarrito(desafio);
    });
});

// creacion de tabla carrito
function agregarAlCarrito(desafio) {
  const cantidad =[];
  carrito.push(desafio);
  document.getElementById("tablaBody").innerHTML += `
      <tr>
          <td>${desafio.nombreDesafio}</td>
          <td>${desafio.horas}</td>
          <td>${desafio.precio}</td>
          <td><input id="cantidadProductos${desafio.id}" type="number" value"${cantidad}" min="1" max="1000" step="1" style="width: 50px;"/></td>
          <td>$ ${(desafio.precio*cantidad)}</td>
      </tr>
   `;
  Swal.fire(
    "producto:" + desafio.nombreDesafio,
    "Agregado a tu carrito de compras !",
    "success"
  );
localStorage.setItem("carrito", JSON.stringify(carrito));


let cantidadProductos = document.getElementById(`cantidadProductos${desafio.id}`);
cantidadProductos.innerHTML+=cantidad;

cantidadProductos.addEventListener("change", (e) => {
  cantidad.push(cantidadProductos);
  desafio.precio*cantidad;
  
});

};

let listaF = document.getElementById("listaF");
listaF.innerHTML = `<ul><li>INSTAGRAM</li><li>FACEBOOK</li><li>WATHSAAP</li></ul>`;

