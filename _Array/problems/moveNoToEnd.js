
/**
 *   Move selected nos to the end of the array 
 */


function moveToEnd(array, num) {
    let l = array.length - 1
    let i = 0
    while (i <= l) {
        if (array[l] == num) {
            l--
        } else if (array[i] == num) {
            array[i] = array[l]
            array[l] = num
            i++; l--
        } else {
            i++
        }
    }
    console.log(array)
}

// moveToEnd(
//     [6, 6, 6, 6, 6, 6, 6, 1, 1], 6
// )

// basic logic 
function ArrayManipulation(n, queries) {

    let arr = new Array(n).fill(0)

    queries.forEach(q => {
        const [a, b, k] = q
        for (var i = a; i <= b; i++) {
            arr[i] += k
        }
    })
    console.log(Math.max(...arr))
}


// online solution 
function ArrayManipulation2(n, queries) {

    var max = 0;
    var array = Array(n);

    queries.forEach(q => {

        // input is 1 based
        var a = q[0] - 1;
        var b = q[1];
        var k = q[2]

        array[a] = array[a] || 0;
        array[a] = array[a] + k;

        array[b] = array[b] || 0;
        array[b] = array[b] - k;
    })

    var current = 0;
    for (var i = 0; i < n; i++) {
        current += (array[i] || 0);
        if (current > max) {
            max = current;
        }
    }
    console.log(array)
    console.log(max);
}


ArrayManipulation2(5, [
    [1, 2, 100],
    [2, 5, 100],
    [2, 4, 100]
])

// ArrayManipulation2()
