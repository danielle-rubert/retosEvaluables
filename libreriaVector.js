//crear Vector
export let crearVector = (n, m) => Array.from({ length: n }, () => Math.floor(Math.random() * (m + 1)));

let vector = crearVector(5, 10); 
console.log(vector);

//suma Vector
export let sumaVector = (v1, v2) => {
    if (v1.length !== v2.length) return null; 

    const resultado = [];
    v1.forEach((valor, indice) => {
        resultado.push(valor + v2[indice]); 
    });

    return resultado;
};

//producto
export let productoNumeroVector = (v, n) => v.map(valor => valor * n);

let vectorProducto = [1, 2, 3, 4];
let numero = 3;

let resultadoProductoNumero = productoNumeroVector(vectorProducto, numero); 
console.log(resultadoProductoNumero);

//resta
export let restaVector = (v3, v4) => v3.length === v4.length ? v3.map((valor, indice) => valor - v4[indice]) : null;

let vector3 = [2, 4, 8];
let vector4 = [1, 3, 4];

let resultadoResta = restaVector(vector3, vector4);
console.log(resultadoResta);

//productoVector
export let productoVector = (v5, v6) => v5.length === v6.length ? v5.map((valor, indice) => valor * v6[indice]) : null;

let vector5 = [10, 15, 20];
let vector6 = [2, 3, 4];

let resultadoProducto = productoVector(vector5, vector6);
console.log(resultadoProducto);

//filtrarPares
export let filtrarPares = (v) => v.filter(numero => numero % 2 === 0);

let vector7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let resultadoFiltroPares = filtrarPares(vector7); 
console.log(resultadoFiltroPares);

//sumatorio
export let sumatorio = (v) => v.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

let vector8 = [1, 3, 7, 8, 11];

let resultadoSumatorio = sumatorio(vector8); 
console.log(resultadoSumatorio);








