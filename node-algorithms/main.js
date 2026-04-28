class Queue {

  constructor() {
    this.items = [];
    this.count = 0;
  }

  isEmpty = () => {
    return this.count === 0;
  }

  enqueue = (value) => {
    this.items.push(value);
    this.count++;
  }

  deuque = () => {
    if (this.count === 0) return undefined;
    this.items.shift();
    this.count--;
  }

  peek = () => {
    return this.items[0];
  }

  size = () => {
    return this.count;
  }

  print = () => {
    console.log(this.items);
  }

}

const queue = new Queue();

queue.print();

const add = document.getElementById('add');
const remove = document.getElementById('remove');
const items = document.getElementById('elements');
const process = document.getElementById('process');


const processData = async () => {
  while (!queue.isEmpty()) {
    await new Promise((resolve) => {
      setTimeout(() => {
        queue.deuque();
        items.innerHTML = queue.items;
        resolve();
      }, 3000);
    });
  }
} 

add.addEventListener('click', () => {
  queue.enqueue('task ' + (queue.size() + 1));
  items.innerHTML = queue.items;
}
)

remove.addEventListener('click', () => {
  queue.deuque();
  items.innerHTML = queue.items;
}
)

process.addEventListener('click', () => {
  processData();
})