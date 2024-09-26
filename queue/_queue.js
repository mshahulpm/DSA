

class Queue2 {

    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }

    enqueue(elm) {
        this.items[this.backIndex] = elm
        this.backIndex++
    }

    dequeue() {
        const it = this.items[this.frontIndex]
        if (!it) return 'Underflow'
        delete this.items[this.frontIndex]
        this.frontIndex++
        return it
    }

    peek() {
        return this.items[this.frontIndex]
    }

    toArray() {
        const res = []
        for (let i = this.frontIndex; i < this.backIndex; i++) {
            res.push(this.items[i])
        }
        return res
    }

}

const q = new Queue2()

q.enqueue(10)
q.enqueue(9)
q.enqueue(1)
console.log(q.toArray());

console.log(q.peek());

q.dequeue()
q.dequeue()
console.log(q.toArray());

