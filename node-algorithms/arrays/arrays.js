// basic manage of arrays for a better understanding of the logic and solve problems 

// const myList = [1, 2, 3, 4, 5]
// myList[0] = 100

// console.log(myList);

// REVERSING ARRAYS AND STRINGS

const fruits = ["apple", "banana", "cherry"];
// console.log(fruits);

// accesing elements using indexin 
// const firstFruit = fruits[0]
// const lastFruit = fruits.at(-1)

// console.log(lastFruit)
// console.log(firstFruit)

//inserting an element at specific position
// fruits.splice(1, 0, "bilberry")
//   console.log(fruits);
// // removing a particular element 

// console.log(fruits);
// fruits.splice(fruits.indexOf("banana", 1))

// console.log(fruits);
//delete the las index of an array and returns it out and make the arr shotest

//  console.log(fruits.pop());
// console.log(fruits);

//add an element at the end of an arr and makes the arr largests

// console.log(fruits.push("pineapple"));
//  console.log(fruits);

// detele the first element of an arr and modify the length of an arr
// console.log( fruits.shift() );
// console.log(fruits);


// add an elelemtn at the start of an arr and makes it longer
// console.log( fruits.unshift("grappe"));
// console.log(fruits);

// create a new arr or stack
const empty = () => [];

// add an element to the top the stack
const push = (element, stack) => [element, ...stack]

// extract an element from the top 
const pop = (stack) => {

    if (stack.length === 0) {
        return [null, stack]
    }

    const [top, ...rest] = stack

    return [top, rest]

}

// extract an element from the bottom
const shift = (stack) => {

    if (stack.length === 0) return [false, stack]

    const last = stack.length - 1

    const newStack = stack.slice(0, last)

    return [stack[last], newStack]

}

// console.log( shift(fruits)  );

// add an element on the bottom
const unshift = (element, stack) => [...stack, element]

// Ejemplo de uso
let stack = empty();
// console.log('Stack vacío:', stack);

// stack = push(10, stack);
// console.log('Después de push 10:', stack);

stack = push(20, stack);
// console.log('Después de push 20:', stack);

// const [popped, newStack] = pop(stack);
// console.log('Elemento extraído:', popped);
// console.log('Nuevo stack:', newStack);
// console.log('Stack original (inmutable):', stack);

// stack = unshift(10, stack)
// console.log('unshift', stack);

// stack = unshift(9, stack)
// console.log('unshift', stack);

// stack = unshift(8, stack)
// console.log('unshift', stack);

// const [shifted, updatedStack] = shift(stack);
// stack = updatedStack;
// console.log('shifted', shifted);
// console.log('stack', stack);
/**
 * |tipo array            ! Propiedad clave                    ! Ejemplo               ! Algoritmo típico 
 * ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * | array ordernado       | asendente o desendente             | [2,4,6,8,10]          | busqueda binaria o dos punteros         || referencia ---->
 *
 * | bitonico              | crea un pico y decrece             | [1,3,8,12,4,2]        | busqueda binaria modificada             || referencia ---><---
 * 
 * | rotado                | un array rotado desendiente        | [15,18,2,3,6,12]      | busqueda binaria con logica de pivote   || referencia --->--->
 * 
 * | convexo               | forma una U                        | [10,8,6,4,2,4,6,8,10] | busqueda binaria modificada o ternaria  || referencia <-------->
 * 
 * | arrego de frecuencias | valores y sus frecuencias          | [[1,3],[2,2],[3,1]]   | busqueda binaria con logica de frecuencia counteint sort consultas directas
 * 
 * | sparce                | la mayoria de los valores son cero | [0,0,0,5,0,0,3,0,0]   | busqueda lineal o diccionarios para acceso directo
 * 
 * | cero                  | el ultimo elemento esta conectado logiamente al primero    | implementacion con decolado circular | recorrido circular o busqueda con punteros rapidos y lentos
 * 
 * | muiltidiientcional    | matricez 2d 3d                     | [[1,2,3],[4,5,6]]     | busqueda en matriz o recorrido en espiral
 * 
*/


// let numbers = [2, 4, 6, 8, 10];

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) return mid && arr[mid]
        if (arr[mid] < target) {
            // recorrerse a la derecha 
            start = mid + 1
        } else {
            //recorrerse a la izquierda 
            end = mid - 1
        }
    }
}

// Function to check audience overlap between two blogs
// console.log(binarySearch(numbers, 2));

let bitonicNumbers = [3, 4, 5, 4, 3, 2, 1, 0, -1];

const searchBitonic = (arr) => {

    let start = 0
    let end = arr.length - 1

    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;

}

// console.log('peak', searchBitonic(bitonicNumbers))

function busquedaBinariaRotado(arr, objetivo) {

    let izquierda = 0;//17,29
    let derecha = arr.length - 1;//33, 24, 28

    while (izquierda <= derecha) {

        const pivote = Math.floor((izquierda + derecha) / 2);// 16,25,29,22,27

        // Si encontramos el objetivo
        if (arr[pivote] === objetivo) {
            return pivote;
        }

        // Determinar qué mitad está ordenada
        // Mitad izquierda está ordenada
        if (arr[izquierda] <= arr[pivote]) {

            // Verificar si el objetivo está en la mitad izquierda ordenada
            if (objetivo >= arr[izquierda] && objetivo < arr[pivote]) {

                derecha = pivote - 1;

            } else {
                izquierda = pivote + 1;

            }
        }

        // Mitad derecha está ordenada
        else {

            // Verificar si el objetivo está en la mitad derecha ordenada
            if (objetivo > arr[pivote] && objetivo <= arr[derecha]) {

                izquierda = pivote + 1;

            } else {
                derecha = pivote - 1;

            }
        }
    }

    return -1; // No encontrado

}


// Probar con tu array
const arrRotado = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log('arr length', arrRotado.length);
// busquedaBinariaRotado(arrRotado, 0) // 22
busquedaBinariaRotado(arrRotado, 15) // 3
// busquedaBinariaRotado(arrRotado, 30) // 29

const searchRootNumbers = (arr) => {
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (mid * mid === arr[mid]) {
            return mid
        }

        if (mid * mid < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return -1
}
let squared = [1, 4, 9, 16, 25, 36, 49, 64, 81];

//  console.log(searchRootNumbers(squared));



let searchMatrix = (mat, x) => {
    // code here

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (mat[i][j] === x) return true
        }
    }

    return false

}

console.log(
    searchMatrix([[14, 34, 23, 95, 43, 28]], 55)
);


const twoPointer = (arr, target) => {

    const n = arr.length

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {

            let sum = arr[i] + arr[j]

            if (sum === target) {
                return true
            }
        }
    }

    return false

}

const arr = [2, 7, 11, 15]
const target = 9

twoPointer(arr, target)


