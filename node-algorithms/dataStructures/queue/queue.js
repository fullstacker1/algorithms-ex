
class Queue {

    #items = [];

    enqueue(item) {
        this.#items.push(item);
    }

    dequeue() {
        return this.#items.shift();
    }

    isEmpty() {
        return this.#items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.#items[0];
    }

    size() {
        return this.#items.length;
    }

    getItems() {
        return this.#items;
    }

}


let queue = new Queue();

queue.enqueue("fred")
queue.enqueue("barney");
queue.enqueue("wilma");

console.log(queue.getItems());


 