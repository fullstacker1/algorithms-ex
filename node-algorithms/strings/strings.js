// // basic manage of strings for a better understanding of the logic and solve problems 
// let myString = 'hello'
// myString[0] = "t"

// myString.replace('h', 'H')
// const newString = myString.replace('h', 'H')
// // REVERSING ARRAYS AND STRINGS
// console.log(myString);

// console.log(newString);


/**
 * mix from sides
 */

const mixedStrings = (inputString) => {
    let result = [];
    let length = inputString.length

    for (let i = 0; i < Math.ceil(inputString.length / 2); i++) {
        result.push(inputString.charAt(i))
        if (length - 1 - i !== i) {
            result.push(inputString.charAt(length - 1 - i))
        }
    }
    return result.join('')
}

// let inputString = "abcdefg";
// let outputString = mixedStrings(inputString);
// console.log(outputString);

string = "abcdefg"

function repeatCharJump(inputString, step) {

    const n = inputString.length;
    let result = '';
    let currentIndex = 0;
    
    for (let i = 0; i < n; i++) {
        console.log(n);
        result += inputString[currentIndex];
        console.log(result);
        currentIndex = (currentIndex + step) % n;

        console.log(currentIndex);
    }
    console.log('result', result);
    return result;
}

repeatCharJump(string, 3)