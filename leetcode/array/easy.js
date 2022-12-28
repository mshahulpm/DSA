/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    const l = nums.length
    for (var i = 1; i < l; i++) {
        nums[i] += nums[i - 1]
    }
    return nums
};

// console.log(runningSum([1, 2, 3, 4]))


/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let x = 0
    let l = operations.length
    let op;
    for (var i = 0; i < l; i++) {
        if (op === 'X++' || op === '++X') x++
        else x--
    }

    return x
};