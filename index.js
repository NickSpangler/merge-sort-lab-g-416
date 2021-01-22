function findMinAndRemoveSorted(array) {
    return array.shift()
}

function merge(array1, array2) {
    let merged = [];
    while (array1.length != 0 && array2.length != 0) {
        if (array1[0] < array2[0]) {
            merged.push(array1.shift())
        } else {
            merged.push(array2.shift())
        }
    }
    return merged.concat(array1).concat(array2);
}

function mergeSort(array1, array2) {
    
}