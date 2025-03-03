const personas = [{
    nombre: "Alicia",
    apellido: "Muñoz",
    anyoNacimiento: 2008,
    aficiones: ["comer", "gymnasio"],
    dni: {anyoExpedicion: 2024, lugarNacimiento: "Madrid"}, 
    colorPelo: "castaño"
},
{
    nombre: "Jorge",
    apellido: "Garcia",
    anyoNacimiento: 1998,
    aficiones: ["jugar", "gymnasio"],
    dni: {anyoExpedicion: 2020, lugarNacimiento: "Madrid"}, 
    colorPelo: "negro"
},
{
    nombre: "Pedro",
    apellido: "Hernandez",
    anyoNacimiento: 1989,
    aficiones: ["jugar", "dormir"],
    dni: {anyoExpedicion: 2021, lugarNacimiento: "Albacete"}, 
    colorPelo: "castaño"
},
{
    nombre: "Natalia",
    apellido: "Silva",
    anyoNacimiento: 1994,
    aficiones: ["comer", "ir de compras"],
    dni: {anyoExpedicion: 2023, lugarNacimiento: "Cadiz"}, 
    colorPelo: "rubio"
}
]

// Color de pelo castaño
if (personas[0].colorPelo === "castaño") {
  console.log(personas[0].nombre);
}
if (personas[1].colorPelo === "castaño") {
  console.log(personas[1].nombre);
}
if (personas[2].colorPelo === "castaño") {
  console.log(personas[2].nombre);
}
if (personas[3].colorPelo === "castaño") {
  console.log(personas[3].nombre);
}

// Personas mayores de 30
const anyoActual = new Date().getFullYear();

if (anyoActual - personas[0].anyoNacimiento > 30) {
  console.log(anyoActual - personas[0].anyoNacimiento);
}
if (anyoActual - personas[1].anyoNacimiento > 30) {
  console.log(anyoActual - personas[1].anyoNacimiento);
}
if (anyoActual - personas[2].anyoNacimiento > 30) {
  console.log(anyoActual - personas[2].anyoNacimiento);
}
if (anyoActual - personas[3].anyoNacimiento > 30) {
  console.log(anyoActual - personas[3].anyoNacimiento);
}

// Lugar nacimiento

if (personas[0].colorPelo === "negro" && personas[0].dni.anyoExpedicion > 2021 || personas[0].aficiones.includes("comer") || personas[0].aficiones.includes("dormir")) {
  console.log(personas[0].dni.lugarNacimiento);
}
if (personas[1].colorPelo === "negro" && personas[0].dni.anyoExpedicion > 2021 || personas[1].aficiones.includes("comer") || personas[1].aficiones.includes("dormir")) {
  console.log(personas[1].dni.lugarNacimiento);
}
if (personas[2].colorPelo === "negro" && personas[0].dni.anyoExpedicion > 2021 || personas[2].aficiones.includes("comer") || personas[2].aficiones.includes("dormir")) {
  console.log(personas[2].dni.lugarNacimiento);
}
if (personas[3].colorPelo === "negro" && personas[0].dni.anyoExpedicion > 2021 || personas[3].aficiones.includes("comer") || personas[3].aficiones.includes("dormir")) {
  console.log(personas[3].dni.lugarNacimiento);
}