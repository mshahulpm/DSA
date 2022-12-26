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

module.exports = {

    logTime,
    calculatePerformance


}