// two sum
const twoSum = (arr, target) => {

    let left = 0
    let right = arr.length - 1


    while (left < right) {
        const sum = arr[left] + arr[right]

        if (sum === target) {
            console.log(arr[left], arr[right]);
            return true
        } else if (sum < target) {
            left++
        } else {
            right--
        }

    }

    return false

}

// const num = [1, 3, 5, 7, 9];
// console.log(twoSum(num, 10)); // true (1+9)
// console.log(twoSum(num, 12)); // true (3+9 o 5+7)
// console.log(twoSum(num, 20)); // false
// console.log(twoSum([3,2,4]), 6);


// palindrome 
const isPalindrome = (word) => {

    let left = 0
    let right = word.length - 1

    while (left < right) {
        if (word[left] !== word[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("reconocer"));
// console.log(isPalindrome("hello"));


// reverse array
const reverseArray = (arr) => {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]

        left++
        right--

    }

    return arr

}

// console.log(reverseArray([1, 2, 3, 4, 5]));
// console.log(reverseArray([1, 2, 3, 4, 5, 6]));
// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));


//max area
function maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxHeight = 0;

    while (left < right) {
        const anchor = right - left;
        const height = Math.min(heights[left], heights[right]);
        const area = anchor * height;
        maxHeight = Math.max(maxHeight, area);

        
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxHeight;
}

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
// console.log(maxArea([1, 1])); // 1
// console.log(maxArea([4, 3, 2, 1, 4])); // 16


// remove duplicates
const deleteDuplicates = (arr) => {
      if (arr.length === 0) return 0;
  let i = 0; // puntero lento (extremo izquierdo)
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1; // nueva longitud

}

// const nums = [0,0,1,1,1,2,2,3,3,4];
// const nuevaLongitud = deleteDuplicates(nums);
// console.log(nuevaLongitud);        // 5
// console.log(nums.slice(0, nuevaLongitud)); // [0,1,2,3,4]