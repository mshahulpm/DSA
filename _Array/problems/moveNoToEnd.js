
/**
 *   Move selected nos to the end of the array 
 */


function moveToEnd(array, num) {
    let l = array.length - 1
    let i = 0
    while (i <= l) {
        if (array[l] == num) {
            l--
        } else if (array[i] == num) {
            array[i] = array[l]
            array[l] = num
            i++; l--
        } else {
            i++
        }
    }
    console.log(array)
}

// moveToEnd(
//     [6, 6, 6, 6, 6, 6, 6, 1, 1], 6
// )


function ArrayManipulation(n, queries) {

    let arr = new Array(n).fill(0)

    queries.forEach(q => {
        const [a, b, k] = q
        for (var i = a; i <= b; i++) {
            arr[i] += k
        }
    })
    console.log(Math.max(...arr))
}

ArrayManipulation(10, [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1]
])