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
let temperaturaValor = document.getElementById('temperatura-valor')  
let temperaturaDescripcion = document.getElementById('temperatura-descripcion')  
let atardecer = document.getElementById('atardecer')
let ultimaActualizacion = document.getElementById('ultimaActualizacion')
let nombre = document.getElementById('nombreLugar')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b775cf1501mshc2c4a06925cfa9cp1491e9jsne18837d3f64e',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=Mendoza&days=2&lang=es&dt=2022-09-14', options)
	.then(response => response.json())
	.then(tiempo => verTiempo(tiempo))
	.catch(err => console.error(err));
  
function verTiempo(tiempo){
  console.log(tiempo)
  let nombreMendoza = (tiempo.location.region);
  let temperaturaActual = (tiempo.current.temp_c);
  let descripcion = (tiempo.current.condition.text);
  let atardecerSanRafael= (tiempo.forecast.forecastday[0].astro.sunset);
  let actualizacion = (tiempo.current.last_updated);
  nombre.innerHTML +=`
  <tr>
   <td>${nombreMendoza} </td>
  </tr>
  `;
  temperaturaValor.innerHTML +=`
  <tr>
   <td>${temperaturaActual} º Grados Celcius</td>
  </tr>
  `;
  temperaturaDescripcion.innerHTML +=`
  <tr>
  <td>${descripcion}</td>
  </tr>
  `;
  atardecer.innerHTML +=`
  <tr>
  <td>${atardecerSanRafael}</td>
  </tr>
  `;
  ultimaActualizacion.innerHTML +=`
  <tr>
  <td>Ultima Actualizacion ${actualizacion}</td>
  </tr>
  `;
}

// Carrito de compras con storage y evento al cargar

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
   let cantidad;
   carrito.push(desafio);
   document.getElementById("tablaBody").innerHTML += `
       <tr>
           <td>${desafio.nombreDesafio}</td>
           <td>${desafio.horas}</td>
           <td>${desafio.precio}</td>
           <td><input id="cantidadProductos${desafio.id}" type="number" value"${cantidad}" min="1" max="1000" step="1" style="width: 50px;"/></td>
           <td>$ ${desafio.precio}</td>
       </tr>
    `;
   Swal.fire(
     "producto:" + desafio.nombreDesafio,
     "Agregado a tu carrito de compras !",
     "success"
   );
 localStorage.setItem("carrito", JSON.stringify(carrito));


 let cantidadProductos = document.getElementById(`cantidadProductos${desafio.id}`);
 cantidadProductos.addEventListener("click", (e) => {
 cantidadNueva = cantidadProductos.value;
 console.log(cantidadNueva*desafio.precio);
 });

 };


let listaF = document.getElementById("listaF");
listaF.innerHTML = `<ul><li>INSTAGRAM</li><li>FACEBOOK</li><li>WATHSAAP</li></ul>`;

