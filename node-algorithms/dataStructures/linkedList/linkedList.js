export default class LinkedList {

    length = 0;
    head = null;


    Node = function (element) {
        this.element = element;
        this.next = null;
    }

    append = function (element) {
        let node = new this.Node(element)

        if (this.head === null) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }

        this.length++
    };

    removeAt = function (position) {
        if (position > -1 && position < this.length) {
            let current = this.head
            let previous
            let index = 0

            if (position === 0) {
                this.head = current.next
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }

            this.length--
            return current.element
        } else {
            return null
        }
    };





    remove = function (element) {
        let index = this.indexOf(element)
        return this.removeAt(index)
    }

    indexOf = function (element) {
        let current = this.head
        let index = 0
        while (current) {
            if (current.element === element || 
                (element && current.element.key === element.key)) {
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    isEmpty = function () {
        return this.length === 0
    }
    size = function () { };
toString = function () {
        let current = this.head
        let string = ''
        while (current) {
            string += current.element.toString() + (current.next ? ' -> ' : '')
            current = current.next
        }
        return string
    };
    print = function () {
        console.log(this.toString())
    }
    getHead = function () {
        return this.head
    }

}