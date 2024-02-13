


class Queue {

    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }

    enqueue(elm) {
        this.items[this.backIndex] = elm
        this.backIndex++
        return true
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

        // return Object.values(this.items)

        let res = []
        for (let i = this.frontIndex; i < this.backIndex; i++) {
            res.push(this.items[i])
        }

        return res
    }

}


let q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
console.log(q.toArray());

q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
console.log(q.toArray(), q);
