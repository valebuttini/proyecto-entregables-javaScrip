// objeto numero 1.  De 3 destinos posibles
class destino {
  constructor(nombre, ruta, picture) {
    this.nombre = nombre;
    this.ruta = ruta;
    this.picture = picture;
  }
}
const destino1 = new destino(
  "Los Reyunos",
  "Ruta Provincial 173",
  "./imagenes/reyunosDestino.jpg"
);
const destino2 = new destino(
  "Valle Grande",
  "Ruta Nacional 143",
  "./imagenes/valleDestino.jpg"
);
const destino3 = new destino(
  "El tigre",
  "Ruta Nacional 150",
  "./imagenes/tigreDestino.jpg"
);
// creo las 3 cartas para estos objetos
let tarjetaIndex1 = document.getElementById("tarjetaIndex1");
tarjetaIndex1.innerHTML = `
        <div class="card" style="width: 18rem;">
              <img src="${destino1.picture}" class="card-img-top" alt="avistaje de condores">
              <div class="card-body">
                <h5 class="card-title">${destino1.nombre}</h5>
                <p class="card-text">${destino1.ruta}</p>
                <a href="../paginas/desafios.html" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;
let tarjetaIndex2 = document.getElementById("tarjetaIndex2");
tarjetaIndex2.innerHTML = `
        <div class="card" style="width: 18rem;">
              <img src="${destino2.picture}" class="card-img-top" alt="avistaje de condores">
              <div class="card-body">
                <h5 class="card-title">${destino2.nombre}</h5>
                <p class="card-text">${destino2.ruta}</p>
                <a href="../paginas/desafios.html" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;
let tarjetaIndex3 = document.getElementById("tarjetaIndex3");
tarjetaIndex3.innerHTML = `
        <div class="card" style="width: 18rem;">
              <img src="${destino3.picture}" class="card-img-top" alt="avistaje de condores">
              <div class="card-body">
                <h5 class="card-title">${destino3.nombre}</h5>
                <p class="card-text">${destino3.ruta}</p>
                <a href="../paginas/desafios.html" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;
//  cree el footer desde js y lo modifico desde css
let listaF = document.getElementById("listaF");
listaF.innerHTML =
  `<ul><li>INSTAGRAM</li><li>FACEBOOK</li><li>WATHSAAP</li></ul>`;
