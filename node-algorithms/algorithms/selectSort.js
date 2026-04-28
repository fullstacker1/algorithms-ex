const slectionSort = (arr) => {

    let n = arr.length;
    
    for (let i = 0; i < n -1; i++) {

        let minIndex = i;

        for (let j = i; j < n; j++) {
            
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
            
        }      
  
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        
    }
}

const printArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}


let arr = [64, 34, 25, 12, 22, 11, 90];
slectionSort(arr);

printArray(arr); // 11, 12, 22, 25, 34, 64, 90