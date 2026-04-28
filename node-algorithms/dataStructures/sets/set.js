



/**
 * Consider a scenario with a list of names and a super-fast scanner that can 
 * immediately tell you whether a name is on the list. In JavaScript terms, 
 * this is what Sets offer via their has method — a way to check presence in constant time.
 */


// const areDisjoint = (array1, array2) => {
//     const set1 = new Set(array1)
//     return !array2.some(element => set1.has(element))
// }


// // Example calls to the function, highlighting the differences in arrays
// console.log(areDisjoint(['Alice', 'Bob', 'Charlie'], ['Xander', 'Yasmine', 'Zane'])); // true, no common names
// console.log(areDisjoint(['Alice', 'Bob', 'Charlie'], ['Charlie', 'Delta', 'Echo'])); // false, 'Charlie' is common to both


/**
 * Now, we move on to a common data-cleaning problem: removing duplicates from an array. 
 * Consider a librarian cataloging books; duplicates waste space and need clarification. 
 * Like the librarian, we want our array to contain unique entries.
 */

// const removeDuplicates = (array) => {

//     return Array.from(new Set(array))

// }

// console.log('array ', " ['apple', 'apple', 'banana', 'banana', 'cherry'] ");
// console.log(removeDuplicates(['apple', 'apple', 'banana', 'banana', 'cherry'])); // ['apple', 'banana', 'cherry']
// console.log("array", "[1, 5, 3, 5, 2, 2, 1]");

// console.log(removeDuplicates([1, 5, 3, 5, 2, 2, 1])); // [1, 5, 3, 2]

// function audienceOverlap(blog1, blog2) {
//     // implement this 
//     const set1 = new Set(blog1)
//     return blog2.some(element => set1.has(element))
// }


// let blog1 = [1, 2, 3, 4, 5];
// let blog2 = [6, 3, 8, 9, 10];


// if (audienceOverlap(blog1, blog2))
//     console.log("Yes, there is an audience overlap between both blogs.");
// else
//     console.log("No, there is no audience overlap between both blogs.");

// const processAddresses = function (addresses) {
//     // implement this
//     const set = Array.from(new Set(addresses))
//     return set
// }

// // Testing the function. 
// let addresses = [1, 2, 3, 2, 1, 5, 3, 1, 2, 1, 4, 5, 6];
// let uniqueAddresses = processAddresses(addresses);
// console.log(uniqueAddresses); // It should return [1, 2, 3, 5, 4, 6]


// // Iterate the wor d array, filling and duplicate sets
// const lastWord = (words) => {

//     let wordSets = new Set();
//     let duplicates = new Set();

//     for (let word of words) {

//         if (wordSets.has(word)) {
//             duplicates.add(word)
//         } else {
//             wordSets.add(word)
//         }

//     }


//     //     // use a loop to remove all duplicate words from the word set 
//     duplicates.forEach(word => wordSets.delete(word));

//     //     //find the last unique word by iterating through the original word list from the end

//     let lastUniqueWord = ""

//     for (let i = words.length - 1; i > 0; i--) {
//         if (wordSets.has(words[i])) {
//             lastUniqueWord = words[i]
//             break
//         }
//     }

//     return lastUniqueWord

// }

// const words = [
//     "apple", "banana", "orange", "apple", "kiwi", "banana", "grape", "melon", "kiwi", "pear", "peach"
// ];

// console.log("The last unique word is: ", lastWord(words)); // Expected output: "pear"
// lastWord(words)

// // let anagramMatcher = new Set()

// let array2 = ["listen", "silent", "enlist", "inlets", "google", "gogole", "elgoog"]

// // const sortCharacters = (input) => {
// //     return [...input].sort((a, b) => a.localeCompare(b)).join('')
// // }

// console.log(sortCharacters("hello")); // Output: "ehllo"
// console.log(sortCharacters("javascript")); // Output: "aacijprstv"

// //store sorted characters from arr2 in a set for fast lookup
// let sortedWordsArray = new Set()
// array2.forEach(word => sortedWordsArray.add(sortCharacters(word)))

// console.log(sortedWordsArray);

// let result = []
// for (let word of array2) {

//     let sortedWord = sortCharacters(word)

//     if (sortedWordsArray.has(sortedWord)) {
//         result.push(word)
//         anagramMatcher.add(word)
//     }

//     console.log(result);

// }

// function sortCharacters(input) {
//     return input.split('').sort().join('');
// }

// function findAnagrams(array1, array2) {
//     // Create a set of sorted words from array1 for fast lookup
//     let sortedArray1 = new Set();
//     array1.forEach(word => sortedArray1.add(sortCharacters(word)));

//     let totalLength = 0;

//     // For each word in array2, check if it has an anagram in array1
//     for (let word of array2) {
//         let sortedWord = sortCharacters(word);
//         if (sortedArray1.has(sortedWord)) {
//             totalLength += word.length;  // Add the length, not just count
//         }
//     }

//     return totalLength;
// }

// let array1 = ["cat", "dog", "tac", "god", "act"];

// let array2 = ["tca", "ogd", "atc", "taco"];
// let result = findAnagrams(array1, array2);
// console.log(result);   // Let's calculate what this should be

/**    
 * Crear un conjunto con todos los géneros únicos votados por todos.
 * Encontrar qué géneros les gustan tanto al Amigo A como al Amigo B (intersección).
 * Encontrar qué géneros solo le gustan al Amigo A (diferencia: A – B).
 * Añadir un nuevo género "Ciencia Ficción" al conjunto universal de géneros (si no está ya presente).
 * Verificar si "Comedia" está en el conjunto universal final.
 */

// let votes = new Set(['Acción', 'Comedia', 'Drama', 'Romance', 'Terror']);

// let amigo_a = ["Acción", "Comedia", "Terror"]
// let amigo_b = ["Comedia", "Drama", "Romance"]

// let setA = new Set(amigo_a)
// let setB = new Set(amigo_b)

// let votesMatchingAB = new Set()
// let votesA = new Set()

// let interseccion = new Set([...setA].filter(x => setB.has(x)));
// console.log("Intersección (géneros comunes):", interseccion);

// let diferenciaAB = new Set([...setA].filter(x => !setB.has(x)));
// console.log("Diferencia A-B (solo A):", diferenciaAB);

// votes.add("Ciencia Ficción");
// console.log("Conjunto universal con Ciencia Ficción:", votes);


// let tieneComedia = votes.has("Comedia");
// console.log("¿Tiene Comedia?", tieneComedia);



// const myMap = new Map([
//     [1, "one"],
//     [2, "two"],
//     [3, "three"],
// ]);
// console.log(
//     myMap
// );


// let mySet = new Set()

// mySet.add(1)
// mySet.add(2)
// mySet.add(3)

// console.log(mySet.size);



// let numeros = [1, 2, 2, 3, 4, 4, 5, 6, 7]
// let setSunDuplicados = new Set(numeros)
// let arraySinDuplicados = Array.from(setSunDuplicados)

// console.log(arraySinDuplicados);


// let colores = new Set(["rojo", "azul", "verde", "rojo", "amarillo", "azul"])
// console.log(colores.has("rojo"));
// console.log(colores.has("morado"));


// colores.delete("verde")

// console.log(colores);

// let setA = new Set([1, 2, 3])
// let setB = new Set([3, 4, 5])

// let union = setA.union(setB)

// console.log(union);


// let letras = new Set(["a", "b", "c", "d", "e"])
// letras.clear()

// console.log(letras.size);

// let animaes = ["perro", "gato", "perro", "pez", "gato", "pájaro"]
// let setAnimales = new Set(animaes)
// console.log(setAnimales);


// let setA = new Set([1, 2, 3, 4])
// let setB = new Set([3, 4, 5, 6])

// let interseccion = new Set([...setB].filter(x => setA.has(x)))


// console.log('interseciont', interseccion);

// let numbers = [1, 2, 3, 3, 4, 4, 5]

// const duplicates = (numbers) => {
//     let num = new Set()
//     let duplicates = false
//     numbers.filter((x, index) => {
//         if (num.has(x)) {
//            duplicates = true
//         } else {
//             num.add(x)
//         }
//     })
//     return duplicates
// }

// console.log(
//     duplicates(numbers)
// );


// let word = "hola mundo"
// let vocales = ["a", "e", "i", "o", "u"]
// let visited = new Set()
// word.trim().toLocaleLowerCase()

// for (let i = 0; i < word.length; i++) {

//     for (let j = 0; j < vocales.length; j++) {

//         if (word[i] === vocales[j]) {
//             visited.add(word[i])
//         }

//     }

// }

// console.log([...visited].join(""));


// let word = "hola mundo"
// const uniqueVowels = (word) => {

//     let vocales = word.toLowerCase().match(/[aeiou]/g) || [];
//     let setVowels = new Set(vocales)

//     return [...setVowels].join('')

// }

// console.log(uniqueVowels("hola mundo"));


// let A = new Set([8, 5]);
// let B = new Set([1, 2, 3, 4]);

// const subSet = (A, B) => {

//     for (const num of A) {
//         if (!B.has(num)) return false   
//     }

//     return true

// }


// console.log(subSet(A, B))

// let setA = new Set([1, 2, 3]);
// let setB = new Set([3, 4, 5]);

// const simetrySet = (a, b) => {

//     return new Set(
//         [...a].filter(x => !b.has(x)).concat(
//         [...b].filter(x => !a.has(x)))
//     )
// }



// const simetrySet = (a, b) => {
//     let similars = []

//     for (let i = 0; i < a.length; i++) {

//         for (let j = 0; j < b.length; j++) {

//             if (a[i] != b[j]) {
//                 similars.push(a[i])
//             } else if (a[i] >= a.length) {
//                 similars.push(...a)
//             }

//         }

//     }

//     return similars
// }


// console.log(
//     simetrySet(setA, setB)
// );


// let personas = [
//     { id: 1, nombre: "Ana" },
//     { id: 2, nombre: "Luis" },
//     { id: 1, nombre: "Ana" }
// ];

// let noDuplicados = new Set()

// let unicos = personas.filter(x => {

//     if (noDuplicados.has(x.id)) return false
//     noDuplicados.add(x.id)
//     return true

// }
// )

// console.log(unicos);



