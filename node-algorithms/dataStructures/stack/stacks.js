
class Stack {

    #stack = [];

    push(item) {
        this.#stack.push(item);
    }

    pop() {
        return this.#stack.pop()
    }

    peek() {
        return this.#stack[this.#stack.length - 1];
    }

    size() {
        return this.#stack.length;
    }

    isEmpty() {
        return this.#stack.length === 0;
    }

    print() {
        if (this.#stack.length === 0) {
            console.log("| Empty stack |");
            return;
        }

        const toPrint = Array.from(this.#stack).reverse();

        let result = '--- Top ---\n';

        toPrint.forEach((item) => {
            result += `| ${item} |\n`;
        });

        result += '--- Bottom ---';
        console.log(result);
    }

    getItems() {
        return [...this.#stack]
    }


}

const name = getElementById('name');

const stack = new Stack();

const addToStack = () => {
    stack.push(name.value);
    name.value = '';

    input.focus();
}

const showNames = () => {

}