// creo los objetos de desafios
class desafio {
  constructor(
    nombreDesafio,
    id,
    imagen,
    horas,
    precio,
    dificultad,
    descripcion
  ) {
    this.nombreDesafio = nombreDesafio;
    this.id = id;
    this.imagen = imagen;
    this.horas = horas;
    this.precio = precio;
    this.dificultad = dificultad;
    this.descripcion = descripcion;
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
  "Treking apto para personas que les gusta experimentar cosas nuevas"
);
const desafio2 = new desafio(
  "Las agatas",
  "12345",
  "../imagenes/lasAgatas.jpg",
  "4",
  1500,
  "3",
  "Treking apto para aquellos que estan acostumbrados a salir de treking seguido, especial para no perder el ritmo!! "
);
const desafio3 = new desafio(
  "Montañana el Blue",
  "12332",
  "../imagenes/montañaBlue.jpg",
  "4",
  2800,
  "4",
  "Este treking se adapta a todas las dificultades de montañana para un experimentado, animate!!"
);
const desafio4 = new desafio(
  "Cerro 360",
  "54321",
  "../imagenes/cerro360.JPG",
  "6",
  3000,
  "5",
  " ¿ Estas buscando mejorar tu habilidad en montañana ? "
);
const desafio5 = new desafio(
  "Lago EL tigre",
  "98765",
  "../imagenes/lagoTigre.jpg",
  "3",
  3000,
  "1",
  "Treking apto para toda la familia !!"
);
const desafio6 = new desafio(
  "Cerro Gallo",
  "67543",
  "../imagenes/cerroGallo.JPG",
  "5",
  1400,
  "3",
  "Si buscan ver paisajes, entonces deben conocer el cerro Gallo"
);
//    creo las cartas a agregar para cada desafio

let carta1 = document.getElementById("carta1");
carta1.innerHTML = `
               <div class="card" style="width: 18rem;">
                   <img src="${desafio1.imagen}" class="card-img-top" alt="avistaje de condores">
                   <div class="card-body">
                       <h4 class="card-title">${desafio1.nombreDesafio}</h4>
                       <h5 class="card-title">Id: ${desafio1.id}</h5>
                       <h5 class="card-title">Horas: ${desafio1.horas}</h5>
                       <p class="card-text">${desafio1.descripcion}</p>
                       <p class="card-text">Dificultad: ${desafio1.dificultad}</p>
                       <p class="card-text">Precio P/P: $${desafio1.precio}</p>
                       <a href="#" class="btn btn-primary" id="botonCarta" >Comprar</a>
                    </div>
               </div>
     `;
let carta2 = document.getElementById("carta2");
carta2.innerHTML = `
             <div class="card" style="width: 18rem;">
               <img src="${desafio2.imagen}" class="card-img-top" alt="vertiente las agatas">
               <div class="card-body">
                   <h4 class="card-title">${desafio2.nombreDesafio}</h4>
                   <h5 class="card-title">Id: ${desafio2.id}</h5>
                 <h5 class="card-title">Horas: ${desafio2.horas}</h5>
                   <p class="card-text">${desafio2.descripcion}</p>
                 <p class="card-text">Dificultad: ${desafio2.dificultad}</p>
                 <p class="card-text">Precio P/P: $${desafio2.precio}</p>
                 <a href="#" class="btn btn-primary">Comprar</a>
             </div>
           </div>
   `;
let carta3 = document.getElementById("carta3");
carta3.innerHTML = `
           <div class="card" style="width: 18rem;">
             <img src="${desafio3.imagen}" class="card-img-top" alt="Cerro Blue">
               <div class="card-body">
                 <h4 class="card-title">${desafio3.nombreDesafio}</h4>
                   <h5 class="card-title">Id: ${desafio3.id}</h5>
                 <h5 class="card-title">Horas: ${desafio3.horas}</h5>
                 <p class="card-text">${desafio3.descripcion}</p>
                 <p class="card-text">Dificultad: ${desafio3.dificultad}</p>
                 <p class="card-text">Precio P/P: $${desafio3.precio}</p>
                 <a href="#" class="btn btn-primary">Comprar</a>
             </div>
           </div>
   `;
let carta4 = document.getElementById("carta4");
carta4.innerHTML = `
           <div class="card" style="width: 18rem;">
              <img src="${desafio4.imagen}" class="card-img-top" alt="Cerro 360">
             <div class="card-body">
                 <h4 class="card-title">${desafio4.nombreDesafio}</h4>
                 <h5 class="card-title">Id: ${desafio4.id}</h5>
                 <h5 class="card-title">Horas: ${desafio4.horas}</h5>
                 <p class="card-text">${desafio4.descripcion}</p>
                 <p class="card-text">Dificultad: ${desafio4.dificultad}</p>
                 <p class="card-text">Precio P/P: $${desafio4.precio}</p>
                 <a href="#" class="btn btn-primary">Comprar</a>
             </div>
           </div>
   `;
carta5.innerHTML = `
           <div class="card" style="width: 18rem;">
             <img src="${desafio5.imagen}" class="card-img-top" alt="Lago El tigre">
             <div class="card-body">
                 <h4 class="card-title">${desafio5.nombreDesafio}</h4>
                 <h5 class="card-title">Id: ${desafio5.id}</h5>
                 <h5 class="card-title">Horas: ${desafio5.horas}</h5>
                 <p class="card-text">${desafio5.descripcion}</p>
                 <p class="card-text">Dificultad: ${desafio5.dificultad}</p>
                 <p class="card-text">Precio P/P: $${desafio5.precio}</p>
                 <a href="#" class="btn btn-primary">Comprar</a>
               </div>
           </div>
   `;
let carta6 = document.getElementById("carta6");
carta6.innerHTML = `
           <div class="card" style="width: 18rem;">
             <img src="${desafio6.imagen}" class="card-img-top" alt="Cerro Gallo">
             <div class="card-body">
                 <h4 class="card-title">${desafio6.nombreDesafio}</h4>
                 <h5 class="card-title">Id: ${desafio6.id}</h5>
                 <h5 class="card-title">Horas: ${desafio5.horas}</h5>
                   <p class="card-text">${desafio6.descripcion}</p>
                   <p class="card-text">Dificultad: ${desafio6.dificultad}</p>
                   <p class="card-text">Precio P/P: $${desafio6.precio}</p>
                   <a href="#" class="btn btn-primary">Comprar</a>
               </div>
             </div>
     `;

