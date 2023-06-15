/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */


var decodeMessage = function (key, message) {
    let m = new Map()
    let letters = 'abcdefghijklmnopqrstuvwxyz'


    let l;
    let i = 0, k = 0
    while (m.size < 26) {
        l = key[k]
        k++
        if (!m.has(l) && l !== ' ') {
            m.set(l, letters[i])
            i++
        }
    }

    let l2
    let res = ''
    for (let j = 0; j < message.length; j++) {
        l2 = message[j]
        if (l2 === ' ') res += ' '
        else res += m.get(l2)
    }
    return res
};


console.log(
    decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")
);
"thequickbrownfxjmpsvlazydg"
"abcdefghijklmnopqrstuvwxyz"
process.exit()

let m = new Map()
m.set('a', 'b')
m.set('c', 'b')
console.log(m, m.size);