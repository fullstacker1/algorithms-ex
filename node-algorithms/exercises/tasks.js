let data = [
    {
        task: 'run',
        complete: false
    }, {
        task: 'read',
        complete: false
    },
    {
        task: 'walk',
        complete: true
    }
]

const addData = (data, item) => {

    if (typeof item !== 'string' || item.length < 5) {
        console.log('elemento invalido');
        return false;
    }

    data.push(
        {
            task: item,
            complete: false
        }
    )

    console.log('aded');

}

// console.log(data)

// addData(data, 'study')
// addData(data, 1234)

const pikItem = (data, item) => {

    let toReturn;

    if (typeof item !== 'string' || item.length < 5) {
        console.log('elemento invalido');
        return false;
    }


    for (let i = 0; i < data.length; i++) {

        if (data[i].task === item) {
            toReturn = data[i]
        }

    }

    return toReturn
}

// console.log(data);
// pikItem(data, 'study')

const edit = (data, item, newItem) => {

    if (typeof item !== 'string' || item.length < 5) {
        console.log('elemento invalido');
        return false;
    }

    for (let i = 0; i < data.length; i++) {

        if (data[i].task === item) {
            data[i].task = newItem
        }

    }

    return true

}

// edit(data, 'study', 'write');
// console.log(data);

const toggleTaskCompletion = (data, item) => {
    // Validaciones iniciales

    if (!Array.isArray(data) || typeof item !== 'string' || item.length < 3) {
        console.log('elemento invalido');
        return false;
    }

    const task = data.find(t => t.task === item);
    if (task) {
        task.complete = !task.complete; // Toggle
        return true;
    }
    return false;
};

// console.log(data);

// toggleTaskCompletion(data, 'run')

// console.log(data);

// toggleTaskCompletion(data, 'write')

// console.log(data);

const deleteItem = (data, item) => {

    if (!Array.isArray(data) || typeof item !== 'string' || item.length < 3) {
        console.log('elemento invalido');
        return false;
    }
    let index = -1;
    // Buscar el índice del elemento a eliminar
    for (let i = 0; i < data.length; i++) {
        if (data[i].task === item) {
            index = i;
            break; // encontrado, salimos del bucle
        }
    }

    // Si no se encontró, retornar false
    if (index === -1) {
        console.log(`Elemento "${item}" no encontrado`);
        return false;
    }

    // Desplazar todos los elementos a la izquierda desde index+1 hasta el final
    for (let i = index; i < data.length - 1; i++) {
        data[i] = data[i + 1];
    }

    // Reducir la longitud del arreglo (eliminar el último elemento duplicado)
    data.length = data.length - 1;

    console.log(`Elemento "${item}" eliminado`);
    return true;

}

// console.log(data);
// deleteItem(data, 'run')
// console.log(data);
// deleteItem(data, 'write')
// console.log(data);

const multiply = (number) => {

    for (let i = 0; i < 11; i++) {

        console.log(` ${number} * ${i} = ${number * i}  `);

    }

}

// multiply(8)


const drawInConsole = () => {
    const alto = 5;
    const ancho = 10;

    for (let i = 0; i < alto; i++) {
        let linea = "";
        for (let j = 0; j < ancho; j++) {
            // Primera o última fila, o primera o última columna
            if (i === 0 || i === alto - 1 || j === 0 || j === ancho - 1) {
                linea += "*";
            } else {
                linea += " ";
            }
        }
        console.log(linea);
    }

}

// drawInConsole()



const drawInConsole2 = () => {
    const filas = 5;
    const columnas = 10;

    for (let i = 0; i < filas; i++) {
        let linea = "";
        for (let j = 0; j < columnas; j++) {
            linea += "*";
        }
        console.log(linea);
    }

}

// drawInConsole2()



/**
 *  <script>
     
     const salida = document.getElementById('salida');

        const filas = 5
        const columnas = 10
        let acumulado = '';

        
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {

                if (i === 0 || i ===  4 || j === 0 || j === 9) {
                    acumulado += "+";
                } else {
                    acumulado += ' '
                }
               
            }
            acumulado += '\n'
        }

        salida.textContent = acumulado;

    </script>

          ++++++++++
          +        +
          +        +
          +        +
          ++++++++++
 
 */

/**
 *  <script>

        const salida = document.getElementById('salida');

        const filas = 5 // numero de filas 
        const columnas = 10 // numero de columnas 
        let acumulado = ''

        for (let i = 0; i < filas; i++) {

            // Cantidad de asteriscos en esta fila: i+1
            const asteriscos = i + 1

            // Cantidad de espacios = ancho total - asteriscos
            const espacios = columnas - asteriscos

            // agregar los espacios primero (para linear a la derecha)
            for (let j = 0; j > espacios; j++) {
                acumulado += ' '
            }

            //agregar los asteriscos
            for (let j = 0; j < asteriscos; j++) {
                acumulado += '*'
            }

            //salto de linea al final de cada fila 
            acumulado += '\n';

        }

        salida.textContent = acumulado;

    </script>

    *
    **
    ***   
    ****
    ***** 


 */


/**
 *   <script>

    const n = 5;
    const salida = document.getElementById('salida')
    let acumulado = ''

    for (let i = 0; i < n; i++) {

        //espacios a la izquierda para centrar
        const espacios = n - i - 1;
        //para invertirlo es n en espacios
        const asteriscos = 2 * i + 1;
        // y 2*(n-i-1)+1

        //añadir espacios 
        for (let j = 0; j < espacios; j++) {
            acumulado += ' '
        }

        //añadir asterisco
        for (let j = 0; j < asteriscos; j++) {
            acumulado += '*'
        }

        //salto de linea
        acumulado += '\n';

    }

    salida.textContent = acumulado

</script>


      *
     ***
    *****
   *******
  *********
 
  */

