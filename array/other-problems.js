
// Shuffle the Array

var shuffle = function (nums, n) {
    let nums2 = nums.slice(n)
    for (let i = 0; i < n; i++) {
        nums[(2 * i) + 1] = nums2[i]
    }
    return nums
};

// console.log(
//     shuffle([2, 5, 1, 3, 4, 7], 3)
// );


function numIdenticalPairs(nums) {

    nums = nums.sort((a, b) => a - b)
    let total_pair = 0

    let n = 0
    let prev = null
    let curr = null
    for (let i = 0; i <= nums.length; i++) {
        curr = nums[i]

        if (curr === prev) n++
        else {
            if (n) {
                total_pair += (n * (n + 1)) / 2
            }
            prev = curr
            n = 0
        }

    }

    return total_pair

}


//  Kids With the Greatest Number of Candies

var kidsWithCandies = function (candies, extraCandies) {

    let max_candy = 0
    for (let i = 0; i < candies.length; i++) {
        max_candy = Math.max(candies[i], max_candy)
    }
    for (let i = 0; i < candies.length; i++) {
        candies[i] = (candies[i] + extraCandies) >= max_candy
    }

    return candies

};

// console.log(
//     kidsWithCandies([2, 3, 5, 1, 3], 3)
// );


// 1672. Richest Customer Wealth

var maximumWealth = function (accounts) {

    let max_wealth = -Infinity

    for (let i = 0; i < accounts.length; i++) {
        const banks = accounts[i];
        let wealth = 0
        for (let j = 0; j < banks.length; j++) {
            wealth += banks[j];
        }

        max_wealth = Math.max(max_wealth, wealth)
    }

    return max_wealth
};


// console.log(
//     maximumWealth([[1, 5], [7, 3], [3, 5]])
// );


// 2574. Left and Right Sum Differences
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {

    let l = nums.length
    let res = new Array(l)
    let leftSum = 0
    for (let i = 0; i < l; i++) {
        const element = nums[i];
        res[i] = leftSum
        leftSum += element
    }

    let rightSum = 0
    for (let i = l - 1; i >= 0; i--) {
        const element = nums[i];
        res[i] = Math.abs(res[i] - rightSum)
        rightSum += element
    }

    return res
};


// console.log(
//     leftRightDifference([1])
// );


// 2114. Maximum Number of Words Found in Sentences
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {

    let max = 0
    for (let i = 0; i < sentences.length; i++) {
        max = Math.max(max, countSpaces(sentences[i]))
    }

    return max + 1
};

function countSpaces(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') count++
    }
    return count
}

let arr = ["please wait", "continue to fight", "continue to win"]

// console.log(
//     mostWordsFound(arr)
// );


// 1365. How Many Numbers Are Smaller Than the Current Number
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {

    let no_count = new Array(101).fill(0)
    for (let i = 0; i < nums.length; i++) {
        no_count[nums[i]]++
    }

    let prevSmallNoCount = 0
    let currentNoCount = 0
    for (let i = 0; i < no_count.length; i++) {
        currentNoCount = no_count[i]
        no_count[i] = prevSmallNoCount
        prevSmallNoCount += currentNoCount
    }

    return nums.map(n => no_count[n])

};

arr = [6, 5, 4, 8]

// console.log(
//     // smallerNumbersThanCurrent(arr)
// );


// 1389. Create Target Array in the Given Order

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {

    let res = []
    for (let i = 0; i < nums.length; i++) {
        res.splice(index[i], 0, nums[i])
    }
    return res

};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {

    let res = []
    let freq, value;
    for (let i = 0; i < nums.length; i += 2) {
        freq = nums[i]
        value = nums[i + 1]
        for (let j = 0; j < freq; j++) {
            res.push(value)
        }
    }
    return res

};


// 1528. Shuffle String

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    let map = {}
    indices.forEach((ind, i) => {
        map[ind] = s[ind]
        s[ind] = map[i] || s[i]
    })
    return s
};


// 2652. Sum Multiples

/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {

    let sum = 0

    // divisible by 3 
    let no = Math.floor(n / 3)
    if (no) {
        sum += 3 * ((no * (no + 1)) / 2)
        console.log({
            no,
            res: 3 * ((no * (no + 1)) / 2)
        });
    }

    // divisible by 5 
    no = Math.floor(n / 5)
    if (no) {
        sum += 5 * ((no * (no + 1)) / 2)
        console.log({
            no,
            res: 5 * ((no * (no + 1)) / 2)
        });
    }

    // divisible by 7 
    no = Math.floor(n / 7)
    if (no) {
        sum += 7 * ((no * (no + 1)) / 2)
        console.log({
            no,
            res: 7 * ((no * (no + 1)) / 2)
        });
    }

    // divisible by 105 
    no = Math.floor(n / 105)
    if (no) {
        sum += 105 * ((no * (no + 1)) / 2)
        console.log({
            no,
            res: 105 * ((no * (no + 1)) / 2)
        });
    }


    //   subtracting common numbers 

    // divisible by 15
    no = Math.floor(n / 15)
    if (no) {
        sum -= 15 * ((no * (no + 1)) / 2)
        console.log({
            no,
            res: 15 * ((no * (no + 1)) / 2)
        });
    }

    // divisible by 21
    no = Math.floor(n / 21)
    if (no) {
        console.log({
            no,
            res: 21 * ((no * (no + 1)) / 2)
        });
        sum -= 21 * ((no * (no + 1)) / 2)
    }

    // divisible by 35
    no = Math.floor(n / 35)
    if (no) {
        console.log({
            no,
            res: 35 * ((no * (no + 1)) / 2)
        });
        sum -= 35 * ((no * (no + 1)) / 2)
    }

    return sum

};


// console.log(
//     sumOfMultiples(105)
// );

// 1773. Count Items Matching a Rule

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {

    let keys = ['type', 'color', 'name']
    let index = keys.findIndex(k => k === ruleKey)
    let res = 0
    for (let i = 0; i < items.length; i++) {
        if (items[i][index] === ruleValue) res++

    }
};


// 2535. Difference Between Element Sum and Digit Sum of an Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {

    let s = 0
    let ds = 0
    nums.forEach(n => {
        s += n
        while (n) {
            ds += n % 10
            n = Math.floor(n / 10)
        }
    })

    return Math.abs(s - ds)
};


// 1662. Check If Two String Arrays are Equivalent

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {

    let w1, w2;
    word1.forEach((w, i) => {
        w1 += w
        if (word2[i]) {
            w2 += word2[i]
        }
        if (i === word1.length - 1) {
            w2 += word2.slice(i + 1).join('')
        }
    })

    return w1 === w2

};

// 2367. Number of Arithmetic Triplets

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */

var arithmeticTriplets = function (nums, diff) {

    let f, s, l
    let res = 0
    for (let i = 1; i < nums.length; i++) {
        s = nums[i];

        //  find first element 
        let j = i - 1
        while (j >= 0) {


            if (s - nums[j] > diff) break

            if (s - nums[j] === diff) {
                f = nums[j]
                break
            }
            j--
        }

        //  find third element 
        let k = i + 1
        while (nums[k] - s <= diff) {

            if (nums[k] - s === diff) {
                l = nums[k]
                break
            }
            k++
        }

        // console.log(f, s, l);

        if (s - f === l - s) {
            console.log(f, s, l);
            res++
        }
        f = undefined
        s = undefined
        l = undefined

    }

    console.log(res);
    return res

};

arithmeticTriplets([0, 1, 2], 1)