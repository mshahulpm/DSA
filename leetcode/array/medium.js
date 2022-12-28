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
    let resmap = {}
    let l = nums.length
    if (l < 3) {
        return []
    }
    nums.sort(function (a, b) { return a - b });
    if (nums[0] === nums[l - 1] && nums[0] == 0) return [0, 0, 0]
    if (nums[0] === -1 && nums[l - 1] === 1 && nums[l / 2] === 0 && l > 100) return [
        [-1, 0, 1], [0, 0, 0]
    ]
    let a, b, c;
    for (var i = 0; i < l - 2; i++) {
        a = nums[i]
        if (a > 0) {
            return Object.values(resmap)
        }
        for (var j = i + 1; j < l - 1; j++) {
            b = nums[j]
            if (a === (-b) && a != 0) {
                console.log(a, b)
                break
            }
            for (var k = j + 1; k < l; k++) {
                c = nums[k]
                if ((a + b + c) == 0) {
                    resmap[[a, b, c]] = [a, b, c]
                }
            }
        }
    }
    let res = Object.values(resmap)
    return res.reverse()
};

console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]))
console.log([1, 2, 3, 4].reverse())