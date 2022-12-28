const { calculatePerformance, fillArray } = require("../../utils");


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const l1 = nums1.length
    const l2 = nums2.length
    const mergeArray = []
    var i = 0, j = 0;

    while (i < l1 || j < l2) {
        let a = nums1[i], b = nums2[j];
        if (a == undefined || b == undefined) {
            // console.log(a, i)
            mergeArray.push(a ?? b)
            i++
            j++
        }
        else if (a == b) {
            mergeArray.push(b)
            mergeArray.push(a)
            j++
            i++
        } else if (a > b) {
            mergeArray.push(b)
            j++
        } else {
            mergeArray.push(a)
            i++
        }
    }

    // console.log(mergeArray)

    const m_l = l1 + l2
    const md = parseInt(m_l / 2)
    if (m_l % 2 == 0) {
        return (mergeArray[md] + mergeArray[md - 1]) / 2
    } else {
        return mergeArray[md]
    }
};

var findMedianSortedArrays2 = function (nums1, nums2) {
    const l1 = nums1.length
    const l2 = nums2.length
    var i = 0, j = 0, k = 0;


    const m_l = l1 + l2

    if (m_l == 2) {
        const [a1, b1] = [...nums1, ...nums2]
        return (a1 + b1) / 2
    }

    const md = parseInt(m_l / 2)
    const isEven = m_l % 2 == 0

    let m1, m2;

    while (i < l1 || j < l2) {

        let a = nums1[i], b = nums2[j];

        if (m1 != undefined && m2 != undefined) {
            console.log('1')
            return (m1 + m2) / 2
        }

        if (!isEven && k == md) {
            return Math.min((a ?? Number.POSITIVE_INFINITY), (b ?? Number.POSITIVE_INFINITY))
        }
        else if (isEven && k == md - 1) {
            m1 = Math.min((a ?? Number.POSITIVE_INFINITY), (b ?? Number.POSITIVE_INFINITY))
        }
        else if (isEven && k == md) {
            m2 = Math.min((a ?? Number.POSITIVE_INFINITY), (b ?? Number.POSITIVE_INFINITY))
        }


        if (a == undefined || b == undefined) {
            i++
            j++
        }
        else if (a == b) {
            if (isEven && k == md - 1) {
                console.log('2')
                return a
            }
            if (isEven && k == md && m1 != undefined) {
                console.log('3')
                return (m1 + a) / 2
            }
            j++
            i++
            k++

            if (isEven && k == md) {
                console.log('3')
                return (m1 + a) / 2
            }
        } else if (a > b) {
            j++
        } else {
            i++
        }

        k++
    }
    console.log(m1, m2)
};


// const arr = fillArray(100000)

console.log(findMedianSortedArrays2([2, 2, 2, 4], [2, 2, 4, 4]))

// calculatePerformance(
//     () => findMedianSortedArrays2(arr, [1, 2, 3, 3]), 1000
// )

// calculatePerformance(
//     () => findMedianSortedArrays(arr, [1, 2, 3, 3]), 1000
// )