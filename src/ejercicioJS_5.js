// EJERCICIO 5

// ----OK------- eliminar valores falsys de una estructura de datos. Utilizamos el método
// filter para que nos devuelva los elementos true.

// const elements = [0, 1, false, 2, "", 3];
// const compact = (arg) => {
//   const truthyElements = elements.filter((element) => element);
//   return truthyElements;
// };

// console.log(compact(123)); // 123

// ----OK----- Si el argumento es un array, comprobarlo y entonces eliminar los elementos falsys.
// const elements = [0, 1, false, 2, "", 3];
// const compact = (arg) => {
//   if (Array.isArray(elements)) {
//     console.log("elements es un array");
//     const truthyElements = elements.filter((element) => element);
//     return truthyElements;
//   } else {
//     console.log("elements no es un array");
//   }
// };

// console.log(compact(123)); // 123

// ----OK-------  Si el argumento es un objeto o un array no deberán ser mutados.
// CON FILTER NO SE MUTAN, SE CREA UN OBJETO NUEVO

// const elements = [0, 1, false, 2, "", 3];

// const compact = (arg) => {
//   const truthyElements = elements.filter((element) => element);
//   return truthyElements;
// };

// console.log(compact({})); // {}
// console.log(elements === compact);

// ----OK------- Compruebo si es un objeto, si no lo es, devuelvo los valores tal cual (si fuera un array eliminaría los valores falsy)

// const elements = [0, 1, false, 2, "", 3];
// const compact = (arg) => {
//   if (typeof elements !== "object") {
//   } else {
//     console.log("no es un objeto");
//     const argument = elements;
//     return argument;
//   }
// };

console.log(compact());
