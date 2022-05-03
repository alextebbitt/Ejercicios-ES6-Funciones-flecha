// 1 Convierte la siguiente función en una función flecha:

const sum = () => "hola";
console.log(sum);
// 2 Convierte la siguiente función en una función flecha en línea:

const division = (a, b) => a / b;
console.log(division(8, 2));
// 3 Convierte la siguiente función en una función flecha:

const miNombre = (nombre) => `Mi nombre es ${nombre}`;
console.log(miNombre);
// 4 Convierte las siguientes funciones en funciones flecha:

// function test2() {
//    console.log("Función test 2 ejecutada.");
//  }
//  function test1(callback) {
//    callback();
//  }

const test2 = () => console.log("Función test 2 ejecutada.");
const test1 = (callback) => callback();
console.log(test2);
console.log(test1);

let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

//  5 Crea un array con la gente mayor de 25 años y muéstralo por consola.
let newArray = [];
gente.forEach((gente) => {
  if (gente.edad > 25) {
    newArray.push(gente);
  }
});

console.log(newArray);

// 6 Crea un array con la gente que empieza por J.

let newArrayWithJ = [];
gente.forEach((gente) => {
  if (gente.nombre.startsWith("J")) newArrayWithJ.push(gente);
});

console.log(newArrayWithJ);

// 7 Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:

const numbers = [4, 5, 6, 7, 8, 9, 10];
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const numbersElevado = numbers.map((value) => {
  return Math.pow(value, value);
});

console.log(numbersElevado);

// Dado el siguiente array, generar un segundo array que consiga generar de salida el
// resultado esperado:
const list = ["Pizza", "Ramen", "Paella", "Entrecot"];
//Resultado esperado
// [
//   'Como soy de Italia, amo comer Pizza',
//   'Como soy de Japón, amo comer Ramen',
//   'Como soy de Valencia, amo comer Paella',
//  'Aunque no como carne, el Entrecot es sabroso'
// ]
const pizzaExercise = list.map((element) => {
  switch (element) {
    case "Pizza":
      return `Como soy de Italia, amo comer ${element}`;
      break;
    case "Ramen":
      return `Como soy de Japón, amo comer ${element}`;
      break;
    case "Paella":
      return `Como soy de Valencia, amo comer ${element}`;
      break;
    case "Entrecot":
      return `Aunque no como carne, el ${element} es sabroso`;
  }
});

console.log(pizzaExercise);
//return `Como soy de Italia, amo comer ${foodList[0]},
//   Como soy de Japón, amo comer ${foodList[1]},
// Como soy de Valencia, amo comer ${foodList[2]},
// Aunque no como carne, el ${foodList[3]} es sabroso.`;

//console.log(pizzaExercise);
// Crea un segundo array que devuelva los impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let numberArray = [];

let impares = numbers2.filter((numbers2) => numbers2 % 2);

console.log(impares);

// Dado el siguiente array, genera un segundo array que filtre los platos veganos y
// saque una sentencia como la del ejemplo:

const foodList2 = [
  {
    name: "Tempeh",
    isVeggie: true,
  },
  {
    name: "Cheesbacon burguer",
    isVeggie: false,
  },
  {
    name: "Tofu burguer",
    isVeggie: true,
  },
  {
    name: "Entrecot",
    isVeggie: false,
  },
];

// 'Que rico Tempeh me voy a comer!',
// 'Que rica Tofu burguer me voy a comer!'
//

//let veggieTest = [];
// const veggieExercise = foodList2.filter((foodList  => {

//switch(foodList) {
//  case "Tempeh":
//    return `Que rico ${foodList} me voy a comer!`
//    break;
//  case "Tofu burguer":
//    return `Que rica ${foodList} me voy a comer!`
//    break;

//}
// // ["test", 2, {name : "test"}]
// function filter(callback) {
//   let newarray = [];
//   for (let index = 0; index < array.length; index++) {
//     var item = list[index];
//     if (callback(item, index, array)) {
//       newarray.push(item);
//     }
//   }
//   return newarray;
// }

var vegandishes3 = foodList2.filter(function (meal) {
  return meal.isVeggie === true;
});

let result = vegandishes3.reduce(function (previousValue, secondValue) {
  return (
    "Que rico " +
    previousValue.name +
    "me voy a comer! " +
    "Que rica " +
    secondValue.name +
    " me voy a comer!"
  );
});
console.log(result);


// console.log(veggieExercise);
const vegano = foodList2.filter((vegan) => vegan.isVeggie === true)
 const tt = vegano.map((vegan) => `Que rico ${vegan.name} me voy a comer!`);
console.log(tt);

//

// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62];
// Salida--> 483600

const sum2 = numeros.reduce((a, b) => a * b);

console.log(sum2);
// Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo 
//accediendo a las propiedades del objeto proporcionado:

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

  let sentences = staff.map(persona => `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[1]}`)
console.log(sentences);
  //Dado el siguiente array, devolver un array con los nombres de los elementos que 
  //valgan más de 300 euros
  const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
  {
    name: 'Viaje a cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
*/
let pricesObove = inventory.filter(prices => prices.price > 300)
console.log(pricesObove);

// Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
  'Me',
  'llamo',
  "Alex",
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
  ];
 
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
const lastExercise = sentenceElements.reduce((a, b) => a + " " + b);

console.log(lastExercise);