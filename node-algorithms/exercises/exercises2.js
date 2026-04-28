
//check if its sorted

const isSorted = (arr) => {

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) { // verify if the element is grather than the left one, cause, this means its not sorted
            return false
        }
    }
    return true
}


// console.log(isSorted([10, 20, 30, 40, 50]));

// array reverse

const reverseArray = (arr) => {
    let temp = []

    for (let i = arr.length - 1; i >= 0; i--) { // start to traverse throught the array from th eend to the start 
        temp.push(arr[i]) // add to the temp empty arr
    }

    return temp // return the array reversed whithout modify the original one 

}
// console.log(
//     reverseArray([1, 2, 3, 4, 5, 6, 7])
// );


//reverse in groups
function reverseInGroups(arr, k) {

    let n = arr.length;

    for (let i = 0; i < n; i += k) {
        let left = i;

        // to handle case when k is not multiple of n
        let right = Math.min(i + k - 1, n - 1);

        console.log(
            ' i:' + i, ', k - 1', k - 1, ', n - 1', n - 1
        );


        console.log(
            'left: ' + left, ', right: ' + right, ', n: ' + n
        );

        // reverse the sub-array [left, right]
        while (left < right) {

            // Swap elements
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left += 1;
            right -= 1;
        }
    }
    return arr;
}

// Driver Code
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let k = 3;
// let arr1 = reverseInGroups(arr, k);
// console.log(arr1.join(" "));


const rearrangedArray = (arr, d) => {

    let n = arr.length;
    if (n === 0) return arr;

    d = d % n;

    // No rotation needed
    if (d === 0) return arr;

    let temp = new Array(n);

    // Copy last d elements to start of temp array
    for (let i = 0; i < d; i++) {
        temp[i] = arr[n - d + i];
        // console.log(
        //     temp
        // );
    }

    // Copy the remaining elements to temp array
    for (let j = 0; j < n - d; j++) {
        temp[d + j] = arr[j];
        // console.log(
        //     temp
        // );
    }

    // Copy temp array to original array
    for (let h = 0; h < n; h++) {
        arr[h] = temp[h];
        console.log(
            arr
        );
    }

    return arr;
}

let arr = [1, 2, 3, 4, 5, 6];
let d = 2;

// rearrangedArray(arr, d);

// // Print the rotated array
// console.log(arr.join(' '));

const allSubArrays = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let subArray = [];
            for (let k = i; k <= j; k++) {

                subArray.push(arr[k]);
                console.log('sub arr', subArray);

            }

        }

    }bn     

}

allSubArrays([1, 2, 3, 4])