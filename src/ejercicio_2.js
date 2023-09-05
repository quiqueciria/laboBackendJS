// EJERCICIO 2

const elements = ["lorem", "ipsum", "dolor", "sit", "amet"];
const index = 2;
const newValue = "furor";

const replaceAt = (arr, index, newElement) => {
  const newElements = [...elements];
  newElements.splice(index, 1, newValue);
  return newElements;
};

const result = replaceAt(elements, index, newValue);

console.log(result === elements); // false
console.log(result); // ['lorem', 'ipsum', 'furor', 'sit', 'amet'];
console.log(elements);
