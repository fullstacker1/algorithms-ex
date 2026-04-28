
/*functional aproach*/

// function recursiveBinarySearch(arr, start, end, target) {

//     //base case 
//     if (start > end) return -1

//     //find middle pint
//     const mid = Math.floor((start + end) / 2)

//     //found target 
//     if (arr[mid] === target) return mid

//     //if the target is less than mid , search left half
//     if (arr[mid] > target) {
//         return recursiveBinarySearch(arr, start, mid - 1, target)
//     }

//     //else search right half
//     else {
//         return recursiveBinarySearch(arr, mid + 1, end, target)
//     }

// }
// console.log(
//     recursiveBinarySearch([2, 5, 12, 30, 54], 0,  arr.length - 1, 30)
// );


/**iterative aproach */
function iterativeBinarySearch(arr, target) {

    let start = 0; //
    let end = arr.length - 1 //3

    while (start <= end) {

        //split array in half
        const mid = Math.floor((start + end) / 2) //-1

        //base  case
        if (arr[mid] === target)
            return mid

        //if element is greater than target , search left half
        if (arr[mid] > target)
            end = mid - 1

        //else search right half
        else start = mid + 1

    }

    return -1

}

//testing the functions

console.log('testing iterative binary search',
    iterativeBinarySearch([1, 2, 3, 4, 5, 6], 2)
)

console.log('testing iterative binary search',
    iterativeBinarySearch([2, 6, 9, 10, 14, 18, 21], 18)
);


// // const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]; // length 10
// // const targetValue = 19;

// // const iterativeResult = iterativeBinarySearch(sortedArray, targetValue);
// // console.log(`Iterative Binary Search: Target found at index ${iterativeResult}`);

// // const recursiveResult = recursiveBinarySearch(sortedArray, 0, sortedArray.length - 1, targetValue);
// // console.log(`Recursive Binary Search: Target found at index ${recursiveResult}`);


// /*
//  * Imagine you're tasked with finding a specific book in a well-organized library database. 
//  * The given code demonstrates how to implement a recursive binary search to locate a number in a sorted array. 
//  * Click Run to see how the function efficiently finds the number's index!
//  */

// function findNumberIndex(arr, start, end, numToFind) {

//     if (start > end) return -1;
//     let mid = Math.floor((start + end) / 2);
//     let midNum = arr[mid];

//     if (midNum === numToFind) return mid;
//     else if (midNum < numToFind) return findNumberIndex(arr, mid + 1, end, numToFind);
//     else return findNumberIndex(arr, start, mid - 1, numToFind);

// }


// // let nums = [2, 5, 12, 30, 54];
// // let numToSearch = 12;
// // let index = findNumberIndex(nums, 0, nums.length - 1, numToSearch); 
// // console.log(index); // Outputs: 2


// /*
//  * Alrighty, time to exercise your coding muscles again! In this practice task, 
//  * I want you to adjust the starter code so that the boolean recursiveBookSearch function returns the index 
//  * where the book is found, or -1 if the book is not in the library array. 
//  * Remember, you've just learned about the binary search, which is quite efficient in searching through sorted arrays.
//  */

// function recursiveBookSearch(library, start, end, bookID) {
//     if (start > end) return -1; // Book not found
//     let mid = Math.floor((start + end) / 2);
//     if (library[mid] === bookID) return mid; // Book found
//     if (library[mid] > bookID)
//         return recursiveBookSearch(library, start, mid - 1, bookID);
//     return recursiveBookSearch(library, mid + 1, end, bookID);
// }

// // // Example library array and book ID to search for
// // const library = [123, 234, 345, 456, 567, 678, 789];
// // const bookID = 456;
// // const bookFound = recursiveBookSearch(library, 0, library.length - 1, bookID);
// // console.log(`Book found: ${bookFound}`);

// /**
//  * Excellent progress! Now, can you help find a book in the database using binary search? 
//  * Add the necessary logic to search for a book by its unique ID in the sorted list of book IDs.
//  */


// function recursiveBinarySearch1(books, start, end, bookId) {

//     if (start > end) return "Book not found";
//     let mid = Math.floor((start + end) / 2)

//     if (library[mid] === bookId) return mid;
//     if (library[mid] > bookId)
//         return recursiveBinarySearch1(books, start, mid - 1, bookId)

//     return recursiveBinarySearch1(books, mid + 1, end, bookId)

// }

// // Example library array and book ID to search for
// // const library = [123, 234, 345, 456, 567, 678, 789];
// // const bookID = 456;
// // const bookIndex = recursiveBinarySearch1(library, 0, library.length - 1, bookID);
// // console.log(`Book index: ${bookIndex}`);

// /**
//  *  Imagine you are helping to manage a library's database and need to find a particular book by its ISBN. 
//  * The provided code uses an iterative binary search to locate the book's index within a sorted array of books. 
//  * Click Run to see how quickly it can find the book you're searching for!
//  */

// function iterativeBinarySearch(books, isbn) {

//     let start = 0;
//     let end = books.length - 1;

//     while (start <= end) {

//         let mid = Math.floor((start + end) / 2);

//         if (books[mid].isbn == isbn)
//             return mid;

//         else if (books[mid].isbn < isbn)
//             start = mid + 1;

//         else end = mid - 1;

//     }
//     return -1;
// }

// // let books = [
// //     { 'isbn': 1111, 'title': 'The Lord of the Rings' },
// //     { 'isbn': 1121, 'title': 'Harry Potter' },
// //     { 'isbn': 2211, 'title': 'The Hobbit' }
// // ];
// // let target = 2211;
// // let result = iterativeBinarySearch(books, target);
// // console.log(result);

// /**
//  * In the library system, a particular book search function is missing. 
//  * You must add this crucial piece of code using binary search to find a specific book in a sorted list of book identifiers.
//  */


// function findBook(bookIDs, bookToFind) {

//     let low = 0;
//     let high = bookIDs.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (bookIDs[mid] === bookToFind) {
//             return arr[mid];

//         } else if (bookIDs[mid] < bookToFind) {
//             low = mid + 1;

//         } else {
//             high = mid - 1;
//         }


//         return -1;  // Book not found

//     }
// }

// // let books = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // let bookFound = findBook(books, 7);
// // console.log(bookFound);

// /**iterative aproach */
// function iterativeBinarySearch(arr, target) {

//     let result = 0
//     let start = 0; //
//     let end = arr.length - 1 //

//     while (start <= end) {

//         //split array in half
//         const mid = Math.floor((start + end) / 2) //9

//         //base  case
//         if (arr[mid] === target) {
//             result = mid
//             break;
//         }
//         //if target is greater than mid , search right half
//         if (arr[mid] < target)
//             start = mid + 1

//         //else search left half
//         else end = mid - 1

//     }


//     return result

// }

// //testing the functions

// const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]; // length 10
// const targetValue = 19;

// // const iterativeResult = iterativeBinarySearch(sortedArray, targetValue);
// // console.log(`Iterative Binary Search: Target found at index ${iterativeResult}`);


// function findValley(arr) {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start < end) {

//         let mid = Math.floor((start + end) / 2);

//         if (arr[mid] < arr[mid + 1]) {
//             // El valle está a la izquierda (incluyendo mid)
//             // caso base
//             end = mid;

//         } else {
//             // El valle está a la derecha
//             start = mid + 1;

//         }
//     }

//     return start; // o end, son iguales
// }

// // let mountainArray = [9, 7, 2, 3, 5, 6];
// // let valleyIndex = findValley(mountainArray);
// // console.log(`Valley index in the mountain array is: ${valleyIndex}`);

// function findPosition(arr, x) {
//     // Step 1: Find the peak (maximum element)
//     var peakIndex = findPeak(arr);
//     console.log('peakIndex', peakIndex);

//     // Step 2: Search in the ascending part (left of peak, including peak)
//     var leftResult = binarySearch(arr, x, 0, peakIndex, true);
//     console.log('leftResult', leftResult);

//     // If found in left part, return result
//     if (leftResult !== -1) {
//         return leftResult;
//     }

//     // Step 3: Search in the descending part (right of peak, excluding peak)
//     var rightResult = binarySearch(arr, x, peakIndex + 1, arr.length - 1, false);

//     return rightResult;
// }

// function findPeak(arr) {

//     var low = 0, high = arr.length - 1;

//     while (low < high) {
//         var mid = Math.floor(low + (high - low) / 2);

//         // If mid element is greater than next element, we're on descending slope
//         // Peak is on the left side (including mid)
//         if (arr[mid] > arr[mid + 1]) {
//             high = mid;
//         }
//         // If mid element is less than next element, we're on ascending slope
//         // Peak is on the right side
//         else {
//             low = mid + 1;
//         }
//     }

//     // When low == high, we found the peak
//     return low;
// }

// // function binarySearch(arr, x, low, high, ascending) {
// //     console.log('low', low, 'high', high);

// //     while (low <= high) {
// //         var mid = Math.floor(low + (high - low) / 2);
// //         if (arr[mid] == x) {
// //             console.log(mid)
// //             return mid;
// //         } else if (ascending) {
// //             if (arr[mid] < x) {
// //                 low = mid + 1;
// //             } else {
// //                 high = mid - 1;
// //             }
// //         } else {

// //             if (arr[mid] > x) high = mid - 1
// //             else low = mid + 1
// //         }
// //     }
// //     return -1;
// // }

// // var arr = [-3, -2, 4, 6, 10, 8, 7, 1];
// // var x = 8;
// // var position = findPosition(arr, x);

// // if (position == -1) {
// //     console.log("Element not present");
// // } else {
// //     console.log("Element present at index " + position);
// // }


// function findMax(nums) {
//     let start = 0,/*2*/  end = nums.length - 1;//

//     while (start < end) {

//         let mid = Math.floor((start + end) / 2);//1

//         // implement this
//         if (nums[mid] > nums[mid + 1]) {
//             // We're in the decreasing part, so maximum is at mid or to the left
//             end = mid;
//         } else {
//             // We're in the increasing part, so maximum is to the right
//             start = mid + 1;
//         }
//     }

//     // When the while loop ends, start and end will be pointing at the largest number
//     return nums[start];
// }

// // Test samples
// // console.log(findMax([2,1,5,4,3])); // Expected output: 5
// // console.log(findMax([15, 10, 8, 2, 33, 27])); // Expected output: 33

// // resume when the arr is bitonic i should compare mid with mid +1 and mid -1 to decide the direction
// // if i want to chese the peak i should compare mid with end or star depending on the situation
// // depending if its increasing or decreasing
// // if i want to find a target value i should decide the direction based on the value of mid and the target value
// // if is a search element i should compare mid with target value
// // if is to find the peak i should compare mid with mid +1 or mid -1

const peak = (arr) => {
    let start = 0
    let end = arr.length - 1

    while (start < end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1
        } else {
            end = mid
        }
    }
    return start
}

console.log(peak([1, 3, 8, 4, 3, 2]));

function findTargetBitonicArray(arr) {
    let start = 0,
        end = arr.length - 1;

    // Here, we start our search for the peak, akin to scanning the crowd for higher ground.
    while (start < end) {

        let mid = Math.floor((start + end) / 2);


        if (arr[mid] < arr[mid + 1]) {

            // The peak is to the right.
            start = mid + 1;

        } else {
            // Our peak is to the left.
            end = mid;

        }
    }
    return start; // The peak is found—a place where you can see far and wide! // low == high, peak inde
}

 let bitonicArray = [1, 3, 8, 12, 4, 2]; //3
 let peakIndex = findTargetBitonicArray(bitonicArray);
 console.log(`Peak index in the bitonic array is: ${peakIndex}`);