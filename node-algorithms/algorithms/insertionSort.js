const insertionSort = (arr) => {

    const sortedArr = [...arr]; // Create a copy

    for (let i = 1; i < sortedArr.length; i++) {
        let key = sortedArr[i];
        let j = i - 1;

        while (j >= 0 && sortedArr[j] > key) {
            sortedArr[j + 1] = sortedArr[j];
            j--;
        }
        sortedArr[j + 1] = key;
    }

    return sortedArr; // Return the new array

};

const printArray = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    
}

let arr = [12, 11, 35, 13, 2, 10, 5, 6];

const sortedArr = insertionSort(arr); // Original array remains unchanged

printArray(sortedArr); // Prints sorted array

console.log(arr); // Original array is still [12, 11, 35, 13, 2, 10, 5, 6]