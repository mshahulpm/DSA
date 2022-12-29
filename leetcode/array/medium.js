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

// not completely full filed 
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let numMap = {}
    let resMap = {}
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
    for (let i = 0; i < nl; i++) {
        a = num[i]
        if (a == 0 && numMap['0'] > 2) {
            resMap[[a, a, a]] = [a, a, a]
        }
        else if (a < 0) {
            for (let j = 0; j <= -a; j++) {
                b = numMap[j] ? j : undefined
                c = numMap[-a + j] ? (-a + j) : undefined
                if (a + b + c === 0) {
                    let ans = [a, b, c].sort((a, b) => a - b)
                    if (b == c) {
                        if (numMap[b] > 1) resMap[[c, b, a]] = [c, b, a].sort((a, b) => a - b)
                    } else {
                        resMap[ans] = ans
                    }
                }
            }
        }
        else if (a > 0) {
            for (let j = 0; j >= -a; j--) {
                b = numMap[j] ? j : undefined
                c = numMap[-a - j] ? (-a - j) : undefined
                if (a + b + c === 0) {
                    let ans = [c, b, a].sort((a, b) => a - b)
                    if (b == c) {
                        if (numMap[b] > 1) resMap[[c, b, a]] = [c, b, a].sort((a, b) => a - b)
                    } else {
                        resMap[ans] = ans
                    }
                }
            }
        }
    }

    return Object.values(resMap)
};

console.log(threeSum([1, 1, -2]))