class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    add = (value) => {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        return newNode;
    }
    find(data) {
        if (!this.head) {
            return
        }
        let current = this.head
        while (current) {
            if (current.data === data) {
                return current
            }
            current = current.next
        }
    }
    remove(data) {
        if (!this.head) {
            return
        }
        while (this.head && this.head.data === data) {
            this.head = this.head.next
        }
        let current = this.head
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next
            } else {
                current = current.next
            }
        }
        if (this.tail.data === data) {
            this.tail = current
        }
    }
    size = () => {
        let count = 1
        let item = this.head
        if (!item) return 0
        while ((item = item.next)) {
            count++
        }
        return count;
    }
    deleteLast() {
        if (!this.tail) {
            return null;
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;

            return list;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }
        this.tail = currentNode;
        return list;
    }
    addElem(values) {
        values.forEach(value => this.add(value));
        return list;
    }
}
const list = new LinkedList()
list.add('Hi');
list.add('1');
list.add('2');
console.log(list);
console.log(list.size());
console.log(list.find('2'));
//раскомментировать,если нужно проверить работу
/* list.remove('2')
console.log(list.size()) */
/* console.log(list.deleteLast())
console.log(list.size()) */
console.log(list.addElem(['5', 7]));
console.log(list.size());
console.log(list)