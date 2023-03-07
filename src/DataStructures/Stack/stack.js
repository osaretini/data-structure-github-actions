class Stack {
  constructor() {
    this.data = {};
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.data[this.size] = element;
  }

  pop() {
    let popped = this.data[this.size];
    delete this.data[this.size];
    this.size--;
    return popped;
  }

  peek() {
    return this.data[this.size];
  }
}

export default Stack;
