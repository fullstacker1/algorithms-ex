const mergeSort = (arr) => {

    if (arr.length <= 1) return arr

    const mid = Math.floor(arr.length / 2)

    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left, right)

}

const merge = (L, R) => {

    console.log('l', L, 'R', R);

    let result = [], i = 0, j = 0

    while (i < L.length && j < R.length) {
        console.log(
            'L[i]', L[i],
            'R[j]', R[j],
            'L[i++]', L[i++],
            'R[j++]', R[j++]
        );

        result.push(L[i] <= R[j] ? L[i++] : R[j++])
        console.log(result);

    }

    return [...result, ...L.slice(i), ...R.slice(j)]
}

console.log(mergeSort([38, 27, 43, 3, 9, 82]))