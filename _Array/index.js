const { logTime, calculatePerformance } = require("../utils");

// // slower
// calculatePerformance(
//     () => {
//         fillArray1(1000000)
//     }, 100
// )

// // faster 
// calculatePerformance(
//     () => {
//         fillArray2(1000000)
//     }, 100
// )

function fillArray1(n) {
    const array = []
    for (var i = 0; i < n; i++) {
        array.push(i + 1)
    }
}

function fillArray2(n) {
    const array = new Array(parseInt(n / 2) + 1)
    for (var i = 0; i < n; i++) {
        array[i] = (i + 1)
    }
}

function getZeroFiledArray1(n) {
    return new Array(n).fill(0)
}

function getZeroFiledArray2(n) {
    const arr = new Array(n)
    while (n) {
        arr[--n] = 0
    }
    return arr
}


// calculatePerformance(
//     () => getZeroFiledArray1(1000000), 100
// )

// calculatePerformance(
//     () => getZeroFiledArray2(1000000), 100
// )

function findMax(arr) {
    let max = Number.NEGATIVE_INFINITY
    let l = arr.length
    while (l) {
        max = arr[l - 1] > max ? arr[l - 1] : max
        l--
    }
    return max
}


const arr = getZeroFiledArray2(10000000)
arr.push(1)



calculatePerformance(
    () => findMax(arr), 100
)
