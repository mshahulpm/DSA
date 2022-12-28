// Container With Most Water

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        maxArea = Math.max(maxArea, Math.min(height[left], height[right])
            * (right - left));
        if (height[left] < height[right])
            left++;
        else
            right--;
    }

    return maxArea;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let numMap = {}
    let result = []
    let l = nums.length
    if (l < 3) {
        return []
    }
    for (var i = 0; i < l; i++) {
        numMap[nums[i]] = (numMap[nums[i]] || 0) + 1
    }

    const num = Object.keys(numMap).map(it => +it).sort((a, b) => a - b)
    const nl = num.length
    let a, b, c;
    for (var i = 0; i < nl; i++) {
        a = num[i]

    }

};

console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]))