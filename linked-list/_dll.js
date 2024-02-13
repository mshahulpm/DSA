

class ListNode {

    data = null;

    /**@type {ListNode|null} */
    next = null
    /**@type {ListNode|null} */
    prev = null

    constructor(value) {
        this.data = value
    }
}

class DoublyLinkedList {

    /**@type {ListNode|null} */
    head = null
    /**@type {ListNode|null} */
    tail = null
    size = 0

    constructor(value) {
        if (value) {
            this.head = new ListNode(value)
            this.tail = this.head
            this.size++
        }
    }

    append(value) {

        let newNode = new ListNode(value)

        if (this.head) {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        } else {
            this.head = newNode
            this.tail = newNode
        }

        this.size++
    }

    prepend(value) {
        let newNode = new ListNode(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
    }

    reverse() {

        let curr = this.head
        let temp = this.tail
        this.tail = this.head
        this.head = temp

        while (curr) {
            temp = curr.next
            curr.next = curr.prev
            curr.prev = temp
            curr = temp
        }


    }

    toArray() {
        let arr = []
        let curr = this.head
        while (curr) {
            arr.push(curr.data)
            curr = curr.next
        }
        return arr
    }

    toArrayReveres() {
        let arr = []
        let curr = this.tail
        while (curr) {
            arr.push(curr.data)
            curr = curr.prev
        }
        return arr
    }

}


const dll = new DoublyLinkedList(1)
dll.append(2)
dll.append(3)
dll.append(4)
dll.append(5)
dll.append(6)
dll.append(7)
dll.append(8)
dll.append(9)
dll.append(10)

console.log(dll.toArray());
dll.reverse()
console.log(dll.toArray());
dll.reverse()
console.log(dll.toArray());
dll.reverse()
console.log(dll.toArray());
dll.reverse()
console.log(dll.toArray());
dll.reverse()
console.log(dll.toArray());
console.log(dll.toArrayReveres());

