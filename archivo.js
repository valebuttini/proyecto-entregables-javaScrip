class destino{
  constructor(nombre, ruta, imagenD) {
      this.nombre = nombre;
      this.ruta  = ruta;
      this.imagenD = imagenD;
  }
}
const destino1 = new destino("Los Reyunos", "Ruta Provincial 173","./imagenes/reyunosDestino.jpg");
const destino2 = new destino("Valle Grande", "Ruta Nacional 143","./imagenes/valleDestino.jpg");
const destino3 = new destino("El tigre", "Ruta Nacional 150","./imagenes/tigreDestino.jpg");




const desafio1 ={
    id: "12345",
    nombre: "Las 4 Cascadas",
    dificultad: 4,
    precio: 1500,
    horas: 2,
    disponibilidad: true,
    imagen:"./imagenes/4-cascadas.jpg"
  }
const desafio2={
    id: "54321",
    nombre:"Las agatas",
    dificultad: 3,
    precio: 2000,
    horas: 3,
    disponibilidad: false,
    imagen:"./imagenes/lasAgatas.jpg"
}
const desafio3={
    id: "12332",
    nombre: "Montañana el Blue",
    dificultad: 4,
    precio: 2800,
    horas: 5,
    disponibilidad: true,
    imagen:"./imagenes/montañaBlue.jpg"

}
const desafio4={
    id: "54321",
    nombre: "Cerro 360",
    dificultad: 1,
    precio: 3000,
    horas: 6,
    disponibilidad: true,
    imagen:"./imagenes/cerro360.JPG"
}
const desafio5={
    id: "98765",
    nombre: "Lago el Tigre",
    dificultad: 3,
    precio: 3000,
    horas: 7,
    disponibilidad: true,
    imagen:"./imagenes/lagoTigre.jpg"
}
const desafio6={
    id: "67543",
    nombre: "Cerro Gallo",
    dificultad: 1,
    precio: 2300,
    horas: 2,
    disponibilidad: true,
    imagen:"./imagenes/cerroGallo.JPG"
 
}


let tarjetaIndex1=document.getElementById("tarjetaIndex1");
tarjetaIndex1.innerHTML=`
        <div class="card" style="width: 18rem;">
              <img src="${destino1.imagenD}" class="card-img-top" alt="avistaje de condores">
              <div class="card-body">
                <h5 class="card-title">${destino1.nombre}</h5>
                <p class="card-text">${destino1.ruta}</p>
                <a href="../paginas/desafios.html" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;
let tarjetaIndex2=document.getElementById("tarjetaIndex2");
tarjetaIndex2.innerHTML=`
        <div class="card" style="width: 18rem;">
              <img src="${destino2.imagenD}" class="card-img-top" alt="avistaje de condores">
              <div class="card-body">
                <h5 class="card-title">${destino2.nombre}</h5>
                <p class="card-text">${destino2.ruta}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;
let tarjetaIndex3=document.getElementById("tarjetaIndex3");
tarjetaIndex3.innerHTML=`
        <div class="card" style="width: 18rem;">
              <img src="${destino3.imagenD}" class="card-img-top" alt="avistaje de condores">
              <div class="card-body">
                <h5 class="card-title">${destino3.nombre}</h5>
                <p class="card-text">${destino3.ruta}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;

let tarjeta1=document.getElementById("tarjeta1");
tarjeta1.innerHTML=`
        <div class="card" style="width: 18rem;">
              <img src="${desafio1.imagen}" class="card-img-top" alt="avistaje de condores">
              <div class="card-body">
                <h5 class="card-title">${desafio1.nombre}</h5>
                <p class="card-text">${desafio1.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;
let tarjeta2=document.getElementById("tarjeta2");
tarjeta2.innerHTML=`
        <div class="card" style="width: 18rem;">
              <img src="${desafio2.imagen}" class="card-img-top" alt="vertiente las agatas">
              <div class="card-body">
                <h5 class="card-title">${desafio2.nombre}</h5>
                <p class="card-text">${desafio2.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;
let tarjeta3=document.getElementById("tarjeta3");
tarjeta3.innerHTML=`
        <div class="card" style="width: 18rem;">
              <img src="${desafio3.imagen}" class="card-img-top" alt="vertiente las agatas">
              <div class="card-body">
                <h5 class="card-title">${desafio3.nombre}</h5>
                <p class="card-text">${desafio3.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;
let tarjeta4=document.getElementById("tarjeta4");
tarjeta4.innerHTML=`
        <div class="card" style="width: 18rem;">
              <img src="${desafio4.imagen}" class="card-img-top" alt="vertiente las agatas">
              <div class="card-body">
                <h5 class="card-title">${desafio4.nombre}</h5>
                <p class="card-text">${desafio4.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;
let tarjeta5=document.getElementById("tarjeta5");
tarjeta5.innerHTML=`
        <div class="card" style="width: 18rem;">
              <img src="${desafio5.imagen}" class="card-img-top" alt="vertiente las agatas">
              <div class="card-body">
                <h5 class="card-title">${desafio5.nombre}</h5>
                <p class="card-text">${desafio5.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;
let tarjeta6=document.getElementById("tarjeta6");
tarjeta6.innerHTML=`
        <div class="card" style="width: 18rem;">
              <img src="${desafio6.imagen}" class="card-img-top" alt="vertiente las agatas">
              <div class="card-body">
                <h5 class="card-title">${desafio6.nombre}</h5>
                <p class="card-text">${desafio6.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
        </div>
`;


let listaF = document.getElementById("listaF")
listaF.innerHTML = "<ul><li>INSTAGRAM</li><li>FACEBOOK</li><li>WATHSAAP</li></ul>"
