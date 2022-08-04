function solicitarDestino() {
  let destino = prompt(
    "Elige e Ingrese su destino  \nValle Grande \nLos Reyunos \nEl Tigre "
  );
  alert("su destino elegido   es " + destino);
  if (destino == "Valle grande".toLowerCase()) {
    alert(
      "sus desafios disponibles son: \nid: 12345-nombre:Avistaje Los Condores \nid: 54321-nombre:Las Agatas \nid: 123321-nombre:Montaña el Blue"
    );
  } else if (destino == "El tigre".toLowerCase()) {
    alert(
      "sus desafios disponibles son: \nid: 98765-nombre:Cerro el Tigre \nid: 67543-nombre:Cerro Gallor  \nid: 5432112-nombre:Cerro 360"
    );
  } else if (destino == "los reyunos".toLowerCase()) {
    alert(
      "sus desafios disponibles son: \nid: 23415-nombre:Cortaderas \nid: 23415-nombre:Cerro Los Reyunos  \nid: 98763-nombre:Los gatos"
    );
  } else {
    alert("ingresa tu destino");
  }
}
let cantidadPersonas = 0;
function solicitarCantidad() {
  cantidadPersonas = parseInt(
    prompt(
      "Bienvenidos !! Ingresar cantidad de personas a realizar la excursion en numeros"
    )
  );
  alert("La cantidad de personas  es " + cantidadPersonas);
}

solicitarCantidad();
solicitarDestino();
const desafios = [
  {
    id: "12345",
    nombre: "Avistaje Los Condores",
    dificultad: "Nivel 1",
    precio: 1500,
    horas: 2,
    disponibilidad: true,
  },
  {
    id: "54321",
    nombre: "Las agatas",
    dificultad: "Nivel 3",
    precio: 2000,
    horas: 3,
    disponibilidad: false,
  },
  {
    id: "12332",
    nombre: "Montañana el Blue",
    dificultad: "Nivel 4",
    precio: 2800,
    horas: 5,
    disponibilidad: true,
  },
  {
    id: "54321",
    nombre: "Cerro 360",
    dificultad: "Nivel 5",
    precio: 3000,
    horas: 6,
    disponibilidad: true,
  },
  {
    id: "98765",
    nombre: "Cerro el Tigre",
    dificultad: "Nivel 6",
    precio: 3000,
    horas: 7,
    disponibilidad: true,
  },
  {
    id: "67543",
    nombre: "Cerro Gallo",
    dificultad: "Nivel 1",
    precio: 2300,
    horas: 2,
    disponibilidad: true,
  },
  {
    id: "98763",
    nombre: "Los gatos",
    dificultad: "Nivel 2",
    precio: 1400,
    horas: 4,
    disponibilidad: true,
  },
  {
    id: "23416",
    nombre: "Cerro Los Reyunos",
    dificultad: "Nivel 5",
    precio: 3000,
    horas: 6,
    disponibilidad: false,
  },
  {
    id: "23415",
    nombre: "Cortaderas",
    dificultad: "Nivel 5",
    precio: 1700,
    horas: 3,
    disponibilidad: true,
  },
];

let id = prompt("ingresa el Id de tu desafio elegido");
let trekingDesafio;
let resultado = 0;
for (const treking of desafios) {
  if (treking.id == id) {
    alert("tu desafio elegido es:");
    let aString =
      "\nID:" +
      treking.id +
      "\nNombre:" +
      treking.nombre +
      "\nDificultad:" +
      treking.dificultad +
      "\nDisponibilidad:" +
      treking.disponibilidad +
      "\nPrecio por persona $:" +
      treking.precio +
      "\nHoras:" +
      treking.horas;
    alert(aString);
    let trekingDesafio = treking;
  }
}
