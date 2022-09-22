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
// clima con API open weather.
let temperaturaValor = document.getElementById("temperatura-valor");
let temperaturaDescripcion = document.getElementById("temperatura-descripcion");
let atardecer = document.getElementById("atardecer");
let ultimaActualizacion = document.getElementById("ultimaActualizacion");
let nombre = document.getElementById("nombreLugar");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b775cf1501mshc2c4a06925cfa9cp1491e9jsne18837d3f64e",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

fetch(
  "https://weatherapi-com.p.rapidapi.com/forecast.json?q=Mendoza&days=2&lang=es&dt=2022-09-14",
  options
)
  .then((response) => response.json())
  .then((tiempo) => verTiempo(tiempo))
  .catch((err) => console.error(err));

function verTiempo(tiempo) {
  console.log(tiempo);
  let nombreMendoza = tiempo.location.region;
  let temperaturaActual = tiempo.current.temp_c;
  let descripcion = tiempo.current.condition.text;
  // let atardecerSanRafael = tiempo.forecast.forecastday[0].astro.sunset;
  let actualizacion = tiempo.current.last_updated;
  nombre.innerHTML += `
  <tr>
   <td>${nombreMendoza} </td>
  </tr>
  `;
  temperaturaValor.innerHTML += `
  <tr>
   <td>${temperaturaActual} º Grados Celcius</td>
  </tr>
  `;
  temperaturaDescripcion.innerHTML += `
  <tr>
  <td>${descripcion}</td>
  </tr>
  `;
  // atardecer.innerHTML += `
  // <tr>
  // <td>${atardecerSanRafael}</td>
  // </tr>
  // `;
  ultimaActualizacion.innerHTML += `
  <tr>
  <td>Ultima Actualizacion ${actualizacion}</td>
  </tr>
  `;
}

//  Carrito de compras con storage y evento al cargar

//  let carrito = [];

//  document.addEventListener("DOMContentLoaded", () => {
//    carrito = JSON.parse(localStorage.getItem("carrito"));
//      if (localStorage.getItem("carrito")) {
//         carrito = JSON.parse(localStorage.getItem("carrito"));
//         carrito.map((desafio)=>{addItemRowToCart(desafio)})}else{carrito = [];}

//    }

//    );

let carrito;
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    carrito.map((desafio) => {
      let prodEnCarrito = {
        ...desafio,
      };
      document.getElementById("tablaBody").innerHTML += `
      <tr id='fila${prodEnCarrito.id}'>
      <td>${prodEnCarrito.nombreDesafio}</td>
      <td>${prodEnCarrito.horas}</td>
      <td>${prodEnCarrito.precio}</td>
      <td id='${prodEnCarrito.id}'> ${prodEnCarrito.cantidad}</td>
      <td><button class='btn btn-light' onclick='eliminar(${prodEnCarrito.id})'>🗑️</button></td>
      </tr>`;
    });
    
  } else {
    carrito = [];
  }
  
  document.getElementById("gastoTotal").innerText = `Total: $ ${calcularTotal()}`;
  
});

//  logica para la creacion de las cards
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

  verCarrito.innerHTML += `
  <button type="button" class="btn btn-primary">Ver Mi Carrito</button>
  `;
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
  let encontrado = carrito.find((p) => p.id == desafio.id);
  if (encontrado == undefined) {
    let prodEnCarrito = {
      ...desafio,
      cantidad: 1,
    };
    carrito.push(prodEnCarrito);
    Swal.fire(
      "producto:" + desafio.nombreDesafio,
      "Agregado a tu carrito de compras !",
      "success"
    );
    document.getElementById("tablaBody").innerHTML += `
      <tr id='fila${prodEnCarrito.id}'>
      <td>${prodEnCarrito.nombreDesafio}</td>
      <td>${prodEnCarrito.horas}</td>
      <td>${prodEnCarrito.precio}</td>
      <td id='${prodEnCarrito.id}'> ${prodEnCarrito.cantidad}</td>
      <td><button class='btn btn-light' onclick='eliminar(${prodEnCarrito.id})'>🗑️</button></td>
      </tr>`;
    

  } else {
    let posicion = carrito.findIndex((p) => p.id == desafio.id);
    console.log(posicion);
    carrito[posicion].cantidad += 1;
    document.getElementById(desafio.id).innerHTML = carrito[posicion].cantidad;
  }
  document.getElementById(
    "gastoTotal"
  ).innerText = `Total: $ ${calcularTotal()}`;
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // addEventToImputNumber(carrito);
}
function calcularTotal() {
  let suma = 0;
  for (const el of carrito) {
    suma = suma + el.precio * el.cantidad;
  }
  return suma;
}

function eliminar(id){
  let indice = carrito.findIndex(prod => prod.id == id);
  carrito.splice(indice,1); //eliminando del carro
  console.log(indice)
  console.log(carrito)
  let filaB = document.getElementById(`fila${id}`);
  document.getElementById("tablaBody").removeChild(filaB);  //eliminando de la tabla
   document.getElementById("gastoTotal").innerText=(`Total: $ ${calcularTotal()}`);
   localStorage.setItem("carrito",JSON.stringify(carrito));
  Swal.fire("Producto eliminado del carro!")
}

//cree esta funcion para agregar en evento al input cantidad y que me aplicara la logiga que contiene
//Esta funcion la llamo en dos momentos de mi app 1. cuando agrego un producto al carrito, 2. cuando recupero mi carrito del localStorage

const confirmarB = document.getElementById("confirmar");


//Esta funcion la llamo en dos momentos de mi app 1. cuando agrego un producto al carrito, 2. cuando recupero mi carrito del localStorage
// function addItemRowToCart({ nombreDesafio, horas, precio, id }, cantidad = 1) {
//   document.getElementById("tablaBody").innerHTML += `



let listaF = document.getElementById("listaF");
listaF.innerHTML = `<ul><li>INSTAGRAM</li><li>FACEBOOK</li><li>WATHSAAP</li></ul>`;
