
/**
 * |tipo array            ! Propiedad clave                    ! Ejemplo               ! Algoritmo típico 
 * ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * | array ordernado       | asendente o desendente             | [2,4,6,8,10]          | busqueda binaria o dos punteros         || referencia ---->
 *
 * | bitonico              | crea un pico y decrece             | [1,3,8,12,4,2]        | busqueda binaria modificada             || referencia ---><---
 * 
 * | rotado                | un array rotado desendiente        | [15,18,2,3,6,12]      | busqueda binaria con logica de pivote   || referencia --->--->
 * 
 * | convexo               | forma una U                        | [10,8,6,4,2,4,6,8,10] | busqueda binaria modificada o ternaria  || referencia <-------->
 * 
 * | arrego de frecuencias | valores y sus frecuencias          | [[1,3],[2,2],[3,1]]   | busqueda binaria con logica de frecuencia counteint sort consultas directas
 * 
 * | sparce                | la mayoria de los valores son cero | [0,0,0,5,0,0,3,0,0]   | busqueda lineal o diccionarios para acceso directo
 * 
 * | cero                  | el ultimo elemento esta conectado logiamente al primero    | implementacion con decolado circular | recorrido circular o busqueda con punteros rapidos y lentos
 * 
 * | muiltidiientcional    | matricez 2d 3d                     | [[1,2,3],[4,5,6]]     | busqueda en matriz o recorrido en espiral
 * 
*/

// busqueda binaria
const binarySearch = (arr, target) => {

    let init = 0
    let end = arr.length - 1

    while (init < end) {
        let mid = Math.floor((init + end) / 2)

        if (arr[mid] === target) return true

        if (arr[mid] < target) {
            init = mid + 1
        } else {
            end = mid - 1
        }
    }
    return false
}

// busqueda binaria bitonica
const binaryBitonic = (arr, target) => {

    let init = 0
    let end = arr.length - 1

    while (init < end) {

        let mid = Math.floor((init + end) / 2)

        if (arr[mid] === target    ) return true

        if (arr[mid] < arr[mid + 1]) {
            init = mid + 1
        } else {
            end = mid - 1
        }
    }
    return false
}

// busqueda en array rotado 
const rotateArrSearch = (arr, target) => {

    let init = 0
    let end = arr.length - 1

    while (init <= end) {

        let mid = Math.floor((init + end) / 2)

        if (arr[mid] === target) return true

        if (arr[init] <= arr[mid]) {
          
            if (target >= nums[init] && target < nums[mid]) {
                end = mid - 1
            } else {
                init = mid + 1
            }
       
        } else if(target > arr[mid] && target <= arr[end]) {
            init = mid + 1
        } else {
            end = mid - 1
        }
    }
    return -1
}

// array convexo 
const convexArr = (arr) => {

}