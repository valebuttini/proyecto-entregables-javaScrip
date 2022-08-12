// funciones solicitantes de datos mediante if y else

// function solicitarDestino() {
//   let destino = prompt(
//     "Elige e Ingrese su destino  \nValle Grande \nLos Reyunos \nEl Tigre "
//   );
//   alert("su destino elegido   es " + destino);
//   if (destino == "Valle grande".toLowerCase()) {
//     alert(
//       "sus desafios disponibles son: \nid: 12345 - nombre: Avistaje Los Condores - Dificultad - 4 \nid: 54321 - nombre: Las Agatas - Dificultad - 3 \nid: 123321 - nombre: Montaña el Blue - Dificultad - 4"
//     );
//   } else if (destino == "El tigre".toLowerCase()) {
//     alert(
//       "sus desafios disponibles son: \nid: 98765 - nombre: Cerro el Tigre - Dificultad - 1 \nid: 67543 - nombre: Cerro Gallor - Dificultad - 3  \nid: 5432112 - nombre: Cerro 360 - Dificultad - 1"
//     );
//   } else if (destino == "los reyunos".toLowerCase()) {
//     alert(
//       "sus desafios disponibles son: \nid: 23415 - nombre: Cortaderas - Dificultad - 2 \nid: 23415 - nombre: Cerro Los Reyunos - Dificultad - 2  \nid: 98763 - nombre: Los gatos - Dificultad - 3"
//     );
//   } else {
//     alert("ingresa tu destino");
//   }
// }
// let cantidadPersonas = 0;
// function solicitarCantidad() {
//   cantidadPersonas = parseInt(
//     prompt(
//       "Bienvenidos!! Ingresar cantidad de personas a realizar la excursion en numeros"
//     )
//   );
//   alert("La cantidad de personas  es " + cantidadPersonas);
// }

// solicitarCantidad();
// solicitarDestino();

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
  








  // {
  //    id: "98763",
  //    nombre: "Los gatos",
  //    dificultad: 2,
  //    precio: 1400,
  //    horas: 4,
  //   disponibilidad: true
  // }

  // {
  //    id: "23416",
  //    nombre: "Cerro Los Reyunos",
  //    dificultad: 2,
  //    precio: 3000,
  //    horas: 6,
  //    disponibilidad: false

  // }

  // {
  //    id: "23415",
  //    nombre: "Cortaderas",
  //    dificultad: 3,
  //    precio: 1700,
  //    horas: 3,
  //    disponibilidad: true
  // }


// let dificultadUsuario = parseInt(
//   prompt(
//     "ingrese la dificultad apta para las personas a desarrollar la excursion"
//   )
// );
// metodo de filtrado

// const dificultades = desafios.filter(
//   (el) => el.dificultad == dificultadUsuario
// );

// console.table(dificultades);
// busqueda por id
// {
//   const idUsuario = (idDesafio) => {
//     const {
//       id,

//       nombre,

//       dificultad,

//       disponibilidad,

//       precio,

//       horas,
//     } = desafios.find((desafio) => desafio.id == idDesafio);

//     let aString = `
//       ID: ${id}
//       Nombre: ${nombre}
//       Dificultad: ${dificultad}
//       Disponibilidad: ${disponibilidad}
//       Precio por persona $: ${precio}
//       Horas: ${horas}`;

//     alert(aString);
//   };
//   idUsuario(prompt("ingresa el Id de tu desafio elegido"));
// }

// nuevo array con precion actualizados mas iva
// const actualizarPrecios = desafios.map((el) => {
//   return {
//     nombre: el.nombre,
//     precio: (el.precio +( el.precio * 0.21)),
//   };
// });
// console.log("los precios con  IVA son:");
// console.log(actualizarPrecios);


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