const bitonicaArrSearch = () => {
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

const binarySearch = (arr, target) => {

    let start = 0
    let end = arr.length - 1

    while (start < end) {

        let mid = Math.floor((start + end) / 2)

        if (arr[mid] === target) {
            return arr[mid]
        }

        if (arr[mid] < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }

    }

    return null

}

 
const searchMatrix = (mat, x) => {
        // code here
        for(let i =0; i < mat; i++){
            for(let j=0; i < mat; j++ ){
                console.log(at[i][j])
            if(mat[i][j] === x) return true 
                
            }
        }
        return false
    }


    searchMatrix([[6, 23, 21],[4, 45, 32],[69, 11, 87]], 32)
