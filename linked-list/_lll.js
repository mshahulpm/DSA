
class ListNode {
    constructor(value) {
        this.data = value
        this.next = null
    }
}

class LinkedList {

    head = null
    tail = null
    length = 0

    constructor(value) {
        if (value) {
            this.head = new ListNode(value)
            this.tail = this.head
            this.length = 1
        }
    }

    append(value) {

        let newElm = new ListNode(value)
        this.length++

        if (!this.head) {
            this.head = newElm
            this.tail = newElm
            return
        }
        this.tail.next = newElm
        this.tail = newElm
    }

    prepend(value) {

        let newHead = new ListNode(value)
        newHead.next = this.head
        this.head = newHead
        this.length++

        if (!this.tail) this.tail = this.head
    }

    insert(index, value,) {

        if (index === 0) {
            this.prepend(value)
            return true
        }

        if (index === this.length) {
            this.append(value)
            return true
        }

        if (index > 0 && index < this.length) {

            let temp = this.head
            let i = 0
            while (i < index) {

                if (i === index - 1) {
                    let newNode = new ListNode(value)
                    newNode.next = temp.next
                    temp.next = newNode
                    this.length++
                    return true
                }

                temp = temp.next
                i++
            }

            return true

        }

        return false

    }

    get(index) {

        if (index < 0 || index >= this.length) return

        let node = this.head
        for (let i = 1; i <= index; i++) {
            node = node.next
        }

        return node.data

    }

    set(index, value) {

        if (index < 0 || index >= this.length) return false

        let node = this.head
        for (let i = 1; i <= index; i++) {
            node = node.next
        }

        node.data = value

    }

    delete(index) {

        if (index < 0 || index >= this.length) return false

        this.length--

        if (index === 0) {
            this.head = this.head.next
            return
        }

        let node = this.head
        let prev = null
        for (let i = 1; i <= index; i++) {
            if (i === index) prev = node
            node = node.next
        }

        prev.next = node.next

        if (index === this.length - 1) this.tail = prev

        return true

    }

    reverse() {

        if (!this.head) return

        this.tail = this.head
        let first = this.head
        let second = this.head.next

        while (second) {
            let temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.head.next = null
        this.head = first

    }

    toArray() {
        let result = []
        let node = this.head
        while (node) {
            result.push(node.data)
            node = node.next
        }
        return result
    }

}


const ll = new LinkedList()
ll.prepend(0)
ll.append(1)
ll.append(2)
ll.append(3)
ll.append(4)
ll.append(5)
ll.insert(3, '5th')
ll.delete(3)
console.log(ll.toArray(), ll.length);
console.log(ll.get(6));
ll.set(6, 10)
ll.reverse()
console.log(ll.toArray());
