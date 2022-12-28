/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
    const l = nums.length
    for (var i = 0; i < l; i++) {
        nums[i] = nums[nums[i]]
    }
    return nums
};


console.log(buildArray([0, 2, 1, 5, 3, 4]))