// 1, 5, 8, 9, 10, 7
// 1, 5, 7, 9, 10, 8
// 1, 5, 7, 8, 10, 9
// 1, 5, 7, 8, 9, 10 resultado final    
function partition(arr, low, high) {

    let pivot = arr[high];//5
    let i = low - 1;//-1
    console.log(i);

    for (let j = low; j <= high; j++) {

        if (arr[j] < pivot) {

            i++;

            [arr[i], arr[j]] = [arr[j], arr[i]];

        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    console.log('arr', arr);
    console.log('return value', i + 1);
    return i + 1;

}

function quickSort(arr, low, high) {


    if (low < high) {

        let pi = partition(arr, low, high);
        console.log(pi, 'pi');
        console.log('low', low, 'high', high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);

    }
}

// let arr = [10, 7, 8, 9, 1, 5];
// let n = arr.length;

// quickSort(arr, 0, n - 1);


/* HORARE QUICK SORT METHOD  */

/**
 * Vamos a explicar el algoritmo de partición de Hoare, que es otra forma de hacer la partición en QuickSort, 
 * generalmente más eficiente que la de Lomuto. 
 * La diferencia principal es cómo se elige el pivote y cómo se intercambian los elementos.
 */

// JavaScript program to partition the array
// using Hoare's Partition Algorithm
function partition(arr) {
    let n = arr.length;
    let pivot = arr[0];
    let i = -1, j = n;
    while (true) {
    
        // find next element larger than pivot 
        // from the left
        do {
            i++;
        } while (arr[i] < pivot);
        
        // find next element smaller than pivot 
        // from the right
        do {
            j--;
        } while (arr[j] > pivot);
        
        // if left and right crosses each other
        // no swapping required
        if (i > j) break;
        
        // swap larger and smaller elements
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// Driver Code
let arr = [5, 3, 8, 4, 2, 7, 1, 10];
partition(arr);
console.log(arr.join(' '));




// swap function
function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// the QuickSort function implementation
function quickSort(arr, low, high)
{
    if (low < high) {

        // pi is the partition return index of pivot
        let pi = partition(arr, low, high);

        // recursion calls for smaller elements
        // and greater or equals elements
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}


// Driver Code
let arr = [ 10, 7, 8, 9, 1, 5 ];
let n = arr.length;

// call QuickSort on the entire array
quickSort(arr, 0, n - 1);
for (let i = 0; i < arr.length; i++) {
    process.stdout.write(arr[i] + " ");
}


