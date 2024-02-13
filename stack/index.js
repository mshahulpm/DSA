


class Stack {

    constructor(size) {
        if (!Number.isInteger(size)) throw new Error('Size Required')
        this.items = new Array()
        this.size = size
    }

    push(elm) {
        if (this.items.length === this.size) return 'Overflow'
        this.items.push(elm)
    }

    pop() {
        if (this.items.length === 0) return 'Underflow'
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    print() {
        console.log(this.items.join(','));
    }

}


let stack = new Stack(10)

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.push(5));
console.log(stack.push(6));
console.log(stack.push(7));
console.log(stack.push(8));
console.log(stack.push(9));
console.log(stack.push(10));
// console.log(stack.push(11));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.print()