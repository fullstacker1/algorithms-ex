const bubbleSort = (arr, n) => {

  let temp;
  let swapped = false;

  for (let i = 0; i < n - 1; i++) {

    for (let j = 0; j < n - i - 1; j++) {

      if (arr[j] > arr[j + 1]) {

        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp;
        swapped = true

      }
    }

    if (!swapped) {
      break;
    }

  }

}

const printArray = (arr, size) => {
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }
}


let arr = [64, 34, 25, 12, 22, 11, 90];
let n = arr.length;

bubbleSort(arr, n);

console.log("Sorted array: ");

printArray(arr, n);
