
/*
 *   extraccion de primer y ultimo elemento 
 * 
 * EXTRAER EL ULTIMO DIGITO 
 *  
 * como extraer el ultimo digito de cualquier numero 
 * 
 * let numero = 12345
 * let ultimoDigito  = numero % 1o 
 *
 * console.log(ultimoDigito) // 5
 * 
 * resto es posible gracias a la base 10 donde el residuo da el ultimo numero que esta en la fila 
 * para eliminar el ultimo digito hay que usar la funcionalidad floor matematicamente sria asi 
 * 
 * let sinUltimoDigito = Math.floor(numero / 10) 1234  -> 5
 * 
 * EXTRAER EL PRIMER DIGITO 
 * 
 * cosnt extractFirstNUmber = () => {
 * let digito = 0;
 * let resto = 0;
 * 
 * if(n < 0){
 *   digito = n;
 *   resto = 0;
 * }
 * 
 * let divisor = 1;
 * 
 * while(divisor *= 10 <= n){
 * 
 * divisor *= 10
 * 
 * }
 * 
 * const priimerDigito  = Math.floor(n / divisor)
 * const resto = n % divisor
 * 
 * return primer digito 
 * 
 * }
 *  
 */

// APLICACIONES MAS IPORTANTES 

/** INVERTIR UN NUMERO  */

const invertNumber = (n) => {
    let invertido = 0;

    while (n > 0) {
        const digit = n % 10;
        invertido = invertido * 10 + digit;
        n = Math.floor(n / 10);
    }
    return invertido
}

/** SUMAR DIGITOS */

const sumarDigitos = (n) => {
    let suma = 0;

    while (n > 0) {
        suma += n % 10;
        n = Math.floor(n / 10);
    }
    return suma;
}

/** CONTAR DIGITOS */

const contarDigitos = (n) => {
    let contador = 0;
    while (n > 0) {
        contador++;
        n = Math.floor(n / 10);
    }
    return contador;
}


/** VERIFICAR SI ES PAR UN DIGITO */

const esPar = (n) => {
    let digit_sum = 0

    while (n > 0) {
        let digit = n % 10;
        if (digit % 1 === 0) {
            digit_sum += sum;
        }
        n = Math.floor(n / 10)
    }
    return digit_sum
}

/** MULTIPLY ODD DIGITS */

const multiplyOddDigits = (n) => {

    n = Math.abs(n);
    let product = 1;
    let foundOdd = false;

    while (n > 0) {

        const digit = n % 10;

        if (digit % 2 === 1) {
            product *= digit;
            foundOdd = true;
        }

        n = Math.floor(n / 10);

    }

    return foundOdd ? product : 0;

}

/***SUM ODS DIGITS */

const sumOddDigits = (n) => {
    let sumOdd = 0;
    let lastNum = 0;


    while (n > 0) {

        lastNum = n % 10;

        if (lastNum % 2 === 0) sumOdd += lastNum

        n = Math.floor(n / 10)

    }
    console.log(sumOdd)
    return sumOdd
}

