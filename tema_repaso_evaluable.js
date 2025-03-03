const ovejas = [
    {nombre: "Nadia", color: "roja"},
    {nombre: "Pepa", color: "blanca"},
    {nombre: "Paloma", color: "negra"},
    {nombre: "Mafalda", color: "marrón"},
    {nombre: "Natalia", color: "roja"},
]

const filtrarOvejas = (ovejas) => ovejas.filter(oveja => 
        oveja.color.toLowerCase() === 'roja' && 
        oveja.nombre.toLowerCase().includes('n') && 
        oveja.nombre.toLowerCase().includes('a')
    );

    const resultado = filtrarOvejas(ovejas);
    console.log(resultado);