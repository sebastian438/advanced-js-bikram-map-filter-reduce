//RESUELVE LOS EJERCICIOS AQUI

//EJERCICIO 01:  Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función elevados que sea el resultado de elevar cada número a si mismo.


let numbers = [4, 5, 6, 7, 8, 9, 10];

const elevados = () => numbers.map((numero) => numero ** numero);

// console.log(elevados());


//EJERCICIO 02: Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado. Ejercicio 2. Dado el array foodList, generar un segundo array llamado result2 que consiga generar de salida el siguiente resultado ['Como soy de Italia, amo comer Pizza', 'Como soy de Japón, amo comer Ramen', 'Como soy de Valencia, amo comer Paella', 'Aunque no como carne, el Entrecot es sabroso']
// [
//     'Como soy de Italia, amo comer Pizza',
//     'Como soy de Japón, amo comer Ramen',
//     'Como soy de Valencia, amo comer Paella',
//     'Aunque no como carne, el Entrecot es sabroso'
// ]

let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

let result2 = foodList.map(comida => {
    if (comida == "Pizza") {
        return `Como soy de Italia, amo comer ${comida}`;
    } else if (comida == "Ramen") {
        return `Como soy de Japón, amo comer ${comida}`;
    } else if (comida == "Paella") {
        return `Como soy de Valencia, amo comer ${comida}`;
    } else {
        return `Aunque no como carne, el ${comida} es sabroso`;
    }
});

// console.log(result2);

// let result2 = [];

// for (let i = 0; i < foodList.length; i++) {
//     if (foodList[i] == "Pizza") {
//         result2.push(`Como soy de Italia, amo comer ${foodList[i]}`);
//     } else if (foodList[i] == "Ramen") {
//         result2.push(`Como soy de Japón, amo comer ${foodList[i]}`);
//     } else if (foodList[i] == "Paella") {
//         result2.push(`Como soy de Valencia, amor comer ${foodList[i]}`);
//     } else {
//         result2.push(`Aunque no como carne, el ${foodList[i]} es sabroso`);
//     }
// }

// console.log(result2);



//EJERCICIO 03:  Dado el array staff, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:

//Explicación: Uso el método map para en result3 guardar una copia del array staff, en cada iteración del map returno el resultado esperado.

const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];



const  result3 = staff.map(objetos => {
    return `${objetos.name} es ${objetos.role} y le gusta ${objetos.hobbies[0]} y ${objetos.hobbies[1]}`;
});


// console.log(result3);
  
  // Resultado esperado
  /*
    [
      'Pepe es The Boss y le gusta leer y ver pelis',
      'Ana es becaria y le gusta nadar y bailar',
      'Luis es programador y le gusta dormir y comprar',
      'Ana es becaria y le gusta nadar y bailar',
      'Carlos es secretario y le gusta futbol y queso'
    ]
  */



//EJERCICIO 04: Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares.

//Explicación: usando el método filter devuelvo los valores que cumplen la condición que sean impares. Estos valores los duplico gracias al método filter desde el array numbers.

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter(num => num % 2 != 0);

// console.log(result4);


//EJERCICIO 05: Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo: 
// ['Que rico Tempeh me voy a comer!',
//     'Que rica Tofu burguer me voy a comer!']

//Explicación: Uso la primera vez el método filter para filtar solo los platos veganos. Por otro la do uso el método map sobre los platos veganos para ir devolviendo uno a uno los platos veganos.


const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];

const veganos = foodList2.filter(platos => {
    return platos.isVeggie === true;
});


const result5 = veganos.map(platos => {
    if (platos.name == "Tofu burguer") {
        return `Que rica ${platos.name} me voy a comer!`;
    } else {
        return `Que rico ${platos.name} me voy a comer!`;
    }
});

// console.log(result5);


//EJERCICIO 06: Dado el array inventory, devolver un array con los nombres de los elementos que valgan más de 300 euros.


//Explicacion: Primero con el método filter devuelvo los objetos que tengan un precio superior a 300, luego con el método map devuelvo el nombre de cada elemento.

/*
  [
    'TV Samsung',
    'Viaje a Cancún'
  ]
*/


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
      name: 'Viaje a Cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];


const objetosPrecioMayorA300 = inventory.filter(elementos => {
    return elementos.price > 300;
});

const result6 = objetosPrecioMayorA300.map(elementos => {
    return elementos.name;
});  

// console.log(result6);


//EJERCICIO 07: Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array.


//Explicación: Uso el método reduce para multiplicar todos los elementos del array. El valor inicial lo pongo en 1 ya que al ser una multiplicación si multiplico por 0 daría 0 todo el rato.

const numeros3 = [39, 2, 4, 25, 62];

const result7  = numeros3.reduce((acumulador, num) => {
  let multiplicacionNumeros = acumulador * num;
  return multiplicacionNumeros;
}, 1);

// console.log(result7);



//EJERCICIO 08: Concatena todos los elementos del array con reduce para que devuelva una sola frase 

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'


//Explicación: Con el método reduce concateno los elementos del array. No pongo el nada en el valor inicial de contador, lo expreso con un template string para añadir un espacio entre el acumulador y el elemento.


const sentenceElements = [
  'Me',
  'llamo',
  "Sebas",
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

const result8 = sentenceElements.reduce((acumulador,elementos) => {
  let elementosConcatenados = `${acumulador} ${elementos}`;
  return elementosConcatenados;
});

// console.log(result8);



//EJERCICIO 09: Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.

// Resultado --> 60


//Explicación: A través del método filter obtuve solo los objetos que tuviesen el la llave category con valor "code". A continuación he usado el metodo map para devolver los precios de los obejtos. Finalmente con el método reduce he sumado los precios.


const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

const objetosCategoryCode = books.filter(libros => {
  let librosCategoryCode = libros.category == "code";
  return librosCategoryCode;
});

// console.log(objetosCategoryCode);

const preciosDeLibrosCategoryCode = objetosCategoryCode.map(libros => {
  let precioLibros = libros.price;
  return precioLibros;
});

// console.log(preciosDeLibrosCategoryCode);

const result9 = preciosDeLibrosCategoryCode.reduce((acumulador, precio) => {
  let sumaDePrecios = acumulador + precio;
  return sumaDePrecios;
}, 0)

// console.log(result9);


