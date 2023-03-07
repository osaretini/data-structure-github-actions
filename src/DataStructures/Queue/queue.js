class Queue {
  constructor() {
    this.storage = {};
    this.head = this.tail = 0;
    this.size = 0;
  }

  enqueue(element) {
    this.storage[this.tail] = element;
    this.size++;
    this.tail++;
  }

  dequeue() {
    let dequeued = this.storage[this.head];
    delete this.storage[this.head];
    this.size--;
    this.head++;
    return dequeued;
  }
}

export default Queue;
