const personas = [
    {
        nombre: "Jennifer",
        apellido: "Lawrence",
        anyoNacimiento: 1990,
        aficiones: ["actuar", "dormir"],
        dni: {anyoExpedicion: 2024, lugarNacimiento: "Kentucky"},
        colorPelo: "rubio"
    },
    {
        nombre: "Kurt",
        apellido: "Cobain",
        anyoNacimiento: 1967,
        aficiones: ["dormir", "escuchar musica"],
        dni: {anyoExpedicion: 2022, lugarNacimiento: "Washington"},
        colorPelo: "rubio"
    },
    {
        nombre: "Paquita",
        apellido: "Salas",
        anyoNacimiento: 1980,
        aficiones: ["comer", "moda"],
        dni: {anyoExpedicion: 2019, lugarNacimiento: "Madrid"},
        colorPelo: "castaño"
    },
    {
        nombre: "Ratoncito",
        apellido: "Pérez",
        anyoNacimiento: 1999,
        aficiones: ["comer", "dormir"],
        dni: {anyoExpedicion: 2020, lugarNacimiento: "Madrid"},
        colorPelo: "gris"
    },
    
]

//for in
for (let propiedades in personas){
    console.log (personas)
}

//for
for (let i = 0; i < personas.length; i++) {
    console.log (personas [i])
}

//while
let i = 0; 

while (i < personas.length) {
  const persona = personas[i];
  console.log(`Nombre: ${persona.nombre}, 
    Apellido: ${persona.apellido}, 
    Año de nacimiento: ${persona.anyoNacimiento},
    Aficiones: ${persona.aficiones},
    DNI: Año de expedidicón: ${persona.dni.anyoExpedicion}, Lugar de nacimiento: ${persona.dni.lugarNacimiento}
    Color de pelo: ${persona.colorPelo}`);
  i++; 
}

//for of
for (let datos of personas){
    console.log (datos)
}

// //Año nacimiento
// for (const persona of personas) {
//     if (persona.anyoNacimiento >= 1978 && persona.anyoNacimiento <= 2000) {
//       console.log(`${persona.nombre}: Tu edad está entre 40 y 20 años`);
//     } else {
//       console.log(`${persona.nombre}: Tu edad no está entre 40 y 20`);
//     }
//   }

// let i = 0;

// while (i < personas.length) {
//   const persona = personas[i]; 
  
//   if (persona.nacimiento >= 1978 && persona.nacimiento <= 2000) {
//     console.log(`${persona.nombre}: Tu edad está entre 40 y 20 años`);
//   } else {
//     console.log(`${persona.nombre}: Tu edad no está entre 40 y 20`);
//   }

//   i++; 
// }

for (const persona of personas) {
    if (persona.nacimiento >= 1978 && persona.nacimiento <= 2000) {
      console.log(`${persona.nombre}: Tu edad está entre 40 y 20 años`);
    } else {
      console.log(`${persona.nombre}: Tu edad no está entre 40 y 20`);
    }
  }

//Añadir afición
for (const persona of personas) {
    persona.aficiones.push("jugar a la play"); 
  }
  
  console.log(personas);
  
  