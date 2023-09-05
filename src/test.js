const collection = [
  {
    id: "f0b6930c-331a-43e1-80db-e6c46ed552aa",
    nationality: "Barbadians",
    language: "English",
    campo: "Madrid",
    barrio: "Ciudad Jardín",
  },
  {
    id: "3e690823-fc74-4376-999a-501e5f9ae4be",
    nationality: "Congolese",
    language: "German",
    campo: "Segovia",
    barrio: "Arganzuela",
  },
  {
    id: "9edd87d6-2f4f-4701-8ec4-272a361dbfe9",
    nationality: "Libyans",
    language: "Tagalog",
    campo: "Sevilla",
    barrio: "Usera",
  },
];

const newObjects = collection.reduce((acc, obj) => {
  acc[obj.id] = {
    nationality: obj.nationality,
    language: obj.language,
    campo: obj.campo,
    barrio: obj.barrio,
  };
  return acc;
}, {});

console.log(newObjects);

// const newCollection = collection.reduce((acc, obj) => {
//   acc[obj.id] = {
//     nationality: obj.nationality,
//     languaje: obj.language,
//     capital: obj.national_sport,
//     flag: obj.flag,
//   };
//   return acc;
// }, {});

// console.log(newCollection);

/*
Resultado:
{
  "f0b6930c-331a-43e1-80db-e6c46ed552aa": {
    nationality: "Barbadians",
    language: "English",
  },
  "3e690823-fc74-4376-999a-501e5f9ae4be": {
    nationality: "Congolese",
    language: "German",
  },
}
*/
