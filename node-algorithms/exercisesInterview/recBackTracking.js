function countBack(n) {
    // case base 
    if (n <= 0) {
        return
    }

    console.log(n);

    //paso recursivo
    countBack(n - 1)

}

// countBack(10)

function factorial(n) {
    // base case 
    if (n == 1 || n == 0) {
        return 1
    }

    //paso recursivo
    return n * factorial(n - 1)

}

// console.log(factorial(5));

function naturalNumSum(n) {
    // caso base 
    if (n === 1) {
        return 1
    }

    return n + naturalNumSum(n - 1)

}

// console.log(naturalNumSum(5));

function fibonacci(n) {

    if (n === 0) {
        return 0
    }

    if (n === 1) {
        return 1
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
}

// console.log(fibonacci(5));

function printReverse(str) {
    if (str.length <= 1) {
        return str
    }

    return str[str.length - 1] + printReverse(str.slice(0, -1))

}

// console.log(printReverse("hola"));


function personalCounter(init, end) {
    if (init > end) {
        return;
    }

    console.log(init);

    personalCounter(init + 1, end)

}

// console.log(personalCounter(3, 7));

function sumDigits(n) {
    // Convertir a positivo si es negativo
    n = Math.abs(n);

    // Caso base: número de un dígito
    if (n < 10) {
        return n;
    }

    // Paso recursivo: último dígito + suma del resto
    return (n % 10) + sumDigits(Math.floor(n / 10));
}

// console.log(
//     sumDigits(12345)
// );


function powNum(base, exp) {
    if (exp === 0) {
        return 1
    }

    return base * powNum(base, exp - 1)

}
// console.log(powNum(2, 5));

function numsProduct(init, end) {
    if (init > end) {
        return - 1
    }

     

}

function vowelCounter(){
    
}