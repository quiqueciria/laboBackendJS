// EJERCICIO 5

// ----OK------- eliminar valores falsys de una estructura de datos. Utilizamos el método
// filter para que nos devuelva los elementos true.

// const elements = [0, 1, false, 2, "", 3];
// const compact = (arg) => {
//   const truthyElements = elements.filter((element) => element);
//   return truthyElements;
// };

// console.log(compact(123)); // 123

// ----PENDING------- Si el argumento es un objeto, deberá eliminar sus propiedades falsys.
// No entiendo lo del si el argumento es un objeto

// const elements = [0, 1, false, 2, "", 3];
// const compact = (arg) => {};

// console.log(compact(null)); // null

// ----OK----- Si el argumento es un array, deberá eliminar los elementos falsys.
// const elements = [0, 1, false, 2, "", 3];
// const compact = (arg) => {
//   const truthyElements = elements.filter((element) => element);
//   return truthyElements;
// };

// console.log(compact(123)); // 123

// ----PENDING-------  Si el argumento es un objeto o un array no deberán ser mutados.
// No entiendo. Cuando comparo, elements y compact me dicen que no son iguales,
// por tanto, no son mutados, no?

// const elements = [0, 1, false, 2, "", 3];

// const compact = (arg) => {
//   const truthyElements = elements.filter((element) => element);
//   return truthyElements;
// };

// console.log(compact({})); // {}
// console.log(elements === compact);

// ----------- Si no es ni un objeto ni un array deberá de devolver dicho argumento.
// console.log(
//   compact({
//     price: 0,
//     name: "cloud",
//     altitude: NaN,
//     taste: undefined,
//     isAlive: false,
//   })
// ); // {name: "cloud"}
