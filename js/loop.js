// function loopDePares (x){
//     for(let i = 0; i <= 100; i++){ 
//     let suma = i + x;
//     if(suma % 2===0){
//         console.log (`El número ${i} es par`);
//         }
//     }
// }
// console.log(loopDePares(6))

// function loopDeImpares (numero, palabra){
//     for(let i = 0; i <= 100; i++){ 
//     let suma = i + numero;
//     if(suma % 2 !== 0 ){
//         console.log (palabra);
//     }
//     }
// }
// console.log(loopDeImpares(2, "par"));

// function sumatoria (numero) {
//     let suma = 0;
//     for( let i = 0; i <= numero; i++){ 
//         let suma += i;
//     }   
//     return suma;
// }
// console.log(sumatoria(6));

// function nuevoArreglo(numero) {
//     let segundoArreglo = [];

//     for (let i = 1; i <= numero; i++) {
//     segundoArreglo.push(i);
//     }
//     return segundoArreglo;
// }
// console.log(nuevoArreglo(9));

// function  split(str) {
//     let arreglo = [];
//     for (let i = 0; i< str.length; i++) {
//     arreglo.push(str[i]);
//     }

//     return arreglo;
//     }
//     console.log(split("Andrea"));

// function arrayHandler(array1, array2) {
//     if (array1.length !== array2.length) {
//     console.log("Los arreglos deben tener el mismo tamaño");
//     return;
//     }
    
//     for (let i = 0; i < array1.length; i++) {
//     console.log(`Soy ${array1[i]} y yo soy ${array2[i]}`);
//     }
// }

// arrayHandler([1, 2, 3, 4], ["h", "o", "l", "a"]);
// arrayHandler([1, 2, 3, 4, 5, 6], ["A", "n", "d", "r", "e", "a"]);

function palindromo(palabra) {
    palabra = palabra.toLowerCase();
        let longitud = palabra.length;
    
    for (let i = 0; i < Math.floor(longitud / 2); i++) {
        if (palabra[i] !== palabra[longitud - 1 - i]) {
        return false;
    }
    }
        return true;
    }
console.log(palindromo("Ana")); 
console.log(palindromo("Andrea")); 
