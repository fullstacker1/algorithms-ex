class Node {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoubbleLinkedList {

    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    add(value){
        
        this.length++
        const node = new Node(value)

        if(this.head === null){
        
            this.head = node
            this.tail = node

        } else {

            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }

    }

    show(){

        let current = this.head
        
        console.log('----------Double linked list ----------');
        console.log('Head:', this.head);
        console.log('Tail:', this.tail  )
        
        while(current){
            console.log(current.value);
            console.log('---');
            console.log('Prev:', current.prev ? current.prev.value : null  );
            console.log('Next:', current.next ? current.next.value : null  );
            current = current.next
        }

    }

    clear(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    delete(value ){

        if(this.length === 0) return null

        if(this.head.value === value ){
            if(this.length === 1){
                this.head = null
                this.tail = null
            } else {
                this.head = this.head.next
                this.head.prev = null
            }
            this.length--
        } else if (this.tail.value === value ){
            this.tail = this.tail.prev
            this.tail.next = null
            this.length--
        } else {
            let current = this.head

            while(current.next !== null){
                if(current.next.value === value){
                    current.next = current.next.next
                    current.next.prev = current
                    this.length--
                    break
                }
                current = current.next
            }

        }
    }

}

const doubbleLinkedList = new DoubbleLinkedList()

doubbleLinkedList.add(1)
doubbleLinkedList.add(2)
doubbleLinkedList.add(3)
doubbleLinkedList.add(4)

doubbleLinkedList.show()

doubbleLinkedList.delete(3) 
doubbleLinkedList.show()