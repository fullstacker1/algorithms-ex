
const insertionSort = (arr) => {

    const sortedArr = [...arr];

    for (let i = 0; i < sortedArr.length; i++) {

        let key = sortedArr[i];
        let j = i - 1;

        while (j >= 0 && sortedArr[j] > key) {

            sortedArr[j + 1] = sortedArr[j];
            j--;

        }

        
        console.log(sortedArr.join(" ")); // Print the array after each insertion sort step
        sortedArr[j + 1] = key;
       
    }


    return sortedArr // Return the new array
}

const printArray = (arr) => {
    console.log(arr.join(" "));

}

let arr = [1, 4, 3, 5, 6, 2];

const arrSorted = insertionSort(arr); // Original array remains unchanged
printArray(arrSorted); // Prints sorted array
