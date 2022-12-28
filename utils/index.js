function logTime(fn, print) {
    const start = Date.now()
    fn()
    const totalTimeTaken = Date.now() - start
    if (print) console.log(totalTimeTaken, 'ms')
    return totalTimeTaken
}

function calculatePerformance(fn, n) {
    let totalTime = 0
    for (var i = 0; i < n; i++) {
        totalTime += logTime(fn)
    }
    console.log('Total time to execute the fn ' + n + ' times : ', totalTime)
    console.log('Average : ', totalTime / n)
}

function fillArray(n) {
    const array = new Array(parseInt(n / 2) + 1)
    for (var i = 0; i < n; i++) {
        array[i] = (i + 1)
    }
    return array
}


function getZeroFiledArray(n) {
    const arr = new Array(n)
    while (n) {
        arr[--n] = 0
    }
    return arr
}


module.exports = {

    logTime,
    calculatePerformance,
    fillArray,
    getZeroFiledArray

}