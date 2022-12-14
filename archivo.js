// creo el objeto destino
const destinos = [{
  nombre: "Los Reyunos",
  picture: "./imagenes/reyunosDestino.jpg",
  ruta: "Ruta Provincial 173",
},
{
  nombre: "Valle Grande",
  picture: "./imagenes/valleDestino.jpg",
  ruta: "Ruta Provincial 153",
},
{
  nombre: "El tigre",
  picture: "./imagenes/tigreDestino.jpg",
  ruta: "Ruta Nacional 150",
},];


// renderizo posible destinos y muestro por DOM

let cardIndex=document.getElementById("cardIndex");
renderizarDestinos();

function renderizarDestinos() {
  for (const destino of destinos) {
      cardIndex.innerHTML+=`
       <div class="card" style="width: 16rem;">
            <img src="${destino.picture}" class="card-img-top" alt="""">
            <div class="card-body">
              <h5 class="card-title">${destino.nombre}</h5>
              <p class="card-text">${destino.ruta}</p>
              <a href="./desafios.html" id="botonIndex" class="btn btn-success">IR</a>
            </div>
       </div>
        `;
  }
}
//  cree el footer desde js y lo modifico desde css
let listaF = document.getElementById("listaF");
listaF.innerHTML =
  `<ul><li>INSTAGRAM</li><li>FACEBOOK</li><li>WATHSAAP</li></ul>`;
