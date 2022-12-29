const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

/**
 * @param {number[]} arr
 * @param {number} num 
 * @return {number} 
 */
function findNumIndex(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) return i
    }
}

const p = performance.now()
console.log(findNumIndex(array, 0))
console.log('Time taken to run the code ', performance.now() - p) 