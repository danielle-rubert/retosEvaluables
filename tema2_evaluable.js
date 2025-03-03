let gato1 = {
    nombre: "Aemond",
    apellidos: ["Targato", "Rubert"],
    edad: 6,
    padres: [
        {nombre: "Danielle", apellidos: ["da Rosa", "Rubert"], edad: 28, padres: [
            {nombre: "Sabrina", apellidos: ["Rubert", "Montserrat"], edad: 60},
            {nombre: "William", apellidos: "Bonner", edad: 62}]
        },
        {nombre: "Christian", apellidos: ["Soto", "Durand"], edad: 25, padres: [
            {nombre: "Jorge", apellidos: ["Soto", "Durand"], edad: 61},
            {nombre: "Maria", apellidos: ["Soto", "Silva"], edad: 57}
        ]}

    ]
   
}

console.log(gato1.padres[0].padres[1].nombre);
console.log(gato1.padres[1].padres[1].apellidos[1]);

// Suma edades
let edadMadre = gato1.padres[0].edad; 
let edadAbueloPadre = gato1.padres[1].padres[0].edad;

let sumaEdades = edadMadre + edadAbueloPadre;

console.log(sumaEdades);

// Intercambio de edades abuelos
let edadAbueloPaterno = gato1.padres[1].padres[0].edad;  
let edadAbuelaPaterna = gato1.padres[1].padres[1].edad;  

gato1.padres[1].padres[0].edad = edadAbuelaPaterna; 
gato1.padres[1].padres[1].edad = edadAbueloPaterno;

console.log(gato1.padres[1].padres[0].edad); 
console.log(gato1.padres[1].padres[1].edad); 

// Añadir apellidos a la abuela
let segundoApellidoAbueloPadre = gato1.padres[1].padres[0].apellidos[1]; 
gato1.padres[0].padres[0].apellidos.push(segundoApellidoAbueloPadre);

console.log(gato1.padres[0].padres[0].apellidos);

//Eliminar apellido de la madre
gato1.padres[0].apellidos.shift();
console.log(gato1.padres[0].apellidos);

// Ultima letra apellido abuelo
let segundoApellidoAbuelo = gato1.padres[1].padres[0].apellidos[1]; 
let ultimaLetra = segundoApellidoAbuelo.charAt(segundoApellidoAbuelo.length - 1);

console.log(ultimaLetra);