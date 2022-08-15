// objeto numero 1. 3 destinos posibles
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


// creo los desafios posibles en los 3 destinos
class desafio {
  constructorDesafios(
    nombreDesafio,
    id,
    dificultad,
    precio,
    horas,
    disponibilidad,
    imagen
  ) {
    this.nombreDesafio = nombreDesafio;
    this.id = id;
    this.imagen = imagen;
    this.dificultad = dificultad;
    this.precio = precio;
    this.horas = horas;
    this.disponibilidad = disponibilidad;
  }
}
// 6 desafios disponibles
const desafio1 = new desafio(
  "Las 4 Cascadas",
  "54321",
  "../imagenes/4-cascadas.jpg",
  "3",
  2000,
  "2",
  true
);
const desafio2 = new desafio(
  "Las agatas",
  "12345",
  "../imagenes/lasAgatas.jpg",
  "4",
  1500,
  "3",
  false
);
const desafio3 = new desafio(
  "Montañana el Blue",
  "12332",
  "../imagenes/montañaBlue.jpg",
  "4",
  2800,
  "5",
  true
);
const desafio4 = new desafio(
  "Cerro 360",
  "54321",
  "../imagenes/cerro360.JPG",
  "1",
  3000,
  "5",
  true
);
const desafio5 = new desafio(
  "Lago EL tigre",
  "98765",
  "../imagenes/lagoTigre.jpg",
  "3",
  3000,
  "6",
  true
);
const desafio6 = new desafio(
  "Cerro Gallo",
  "67543",
  "../imagenes/lagoTigre.jpg",
  "3",
  1400,
  "7",
  true
);
// creo la funcion con las cartas a agregar 
function cartaDesafio() {
  let carta1 = document.getElementById("carta1");
  carta1.innerHTML = `
        <div class="card" style="width: 18rem;">
              <img src="${desafio1.imagen}" class="card-img-top" alt="avistaje de condores">
              <div class="card-body">
                <h5 class="card-title">${desafio1.nombreDesafio}</h5>
                <h5 class="card-title">${desafio1.id}</h5>
                <p class="card-text">${desafio1.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;
  let carta2 = document.getElementById("carta2");
  carta2.innerHTML = `
        <div class="card" style="width: 18rem;">
              <img src="${desafio2.imagen}" class="card-img-top" alt="vertiente las agatas">
              <div class="card-body">
                <h5 class="card-title">${desafio2.nombreDesafio}</h5>
                <p class="card-text">${desafio2.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;
  let carta3 = document.getElementById("carta3");
  carta3.innerHTML = `
        <div class="card" style="width: 18rem;">
              <img src="${desafio3.imagen}" class="card-img-top" alt="vertiente las agatas">
              <div class="card-body">
                <h5 class="card-title">${desafio3.nombreDesafio}</h5>
                <p class="card-text">${desafio3.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;
  let carta4 = document.getElementById("carta4");
  carta4.innerHTML = `
        <div class="card" style="width: 18rem;">
              <img src="${desafio4.imagen}" class="card-img-top" alt="vertiente las agatas">
              <div class="card-body">
                <h5 class="card-title">${desafio4.nombreDesafio}</h5>
                <p class="card-text">${desafio4.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;
  let carta5 = document.getElementById("carta5");
  carta5.innerHTML = `
        <div class="card" style="width: 10rem;">
              <img src="${desafio5.imagen}" class="card-img-top" alt="vertiente las agatas">
              <div class="card-body">
                <h5 class="card-title">${desafio5.nombreDesafio}</h5>
                <p class="card-text">${desafio5.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;
  let carta6 = document.getElementById("carta6");
  carta6.innerHTML = `
        <div class="card" style="width: 10rem;">
              <img src="${desafio6.imagen}" class="card-img-top" alt="vertiente las agatas">
              <div class="card-body">
                <h5 class="card-title">${desafio6.nombreDesafio}</h5>
                <p class="card-text">${desafio6.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;
}
cartaDesafio();
// footer
let listaF = document.getElementById("listaF");
listaF.innerHTML =
  `<ul><li>INSTAGRAM</li><li>FACEBOOK</li><li>WATHSAAP</li></ul>`;
