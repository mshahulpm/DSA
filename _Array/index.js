const { logTime, calculatePerformance } = require("../utils");

// slower
calculatePerformance(
    () => {
        fillArray1(1000000)
    }, 100
)

// faster 
calculatePerformance(
    () => {
        fillArray2(1000000)
    }, 100
)

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