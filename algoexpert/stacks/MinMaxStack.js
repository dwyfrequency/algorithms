// Feel free to add new properties and methods to the class.
class MinMaxStack {
  constructor() {
    this.stack = [];
    this.min = null;
    this.max = null;
  }
  peek() {
    // Write your code here.
    return this.stack[this.stack.length - 1];
  }

  pop() {
    // Write your code here.
    const poppedVal = this.stack.pop();
    if (!this.stack.length) {
      this.min = null;
      this.max = null;
    } else if (poppedVal === this.min) {
      this.setMin();
    } else if (poppedVal === this.max) {
      this.setMax();
    }
    return poppedVal;
  }

  push(number) {
    // Write your code here.
    if (this.min === null || this.max === null) {
      this.min = number;
      this.max = number;
    } else if (number < this.min) {
      this.min = number;
    } else if (number > this.max) {
      this.max = number;
    }
    this.stack.push(number);
  }

  getMin() {
    // Write your code here.

    return this.min;
  }

  getMax() {
    // Write your code here.
    return this.max;
  }

  setMin() {
    this.min = this.stack.reduce(
      (accum, num) => (accum > num ? num : accum),
      Infinity
    );
  }
  setMax() {
    this.max = this.stack.reduce(
      (accum, num) => (accum < num ? num : accum),
      -Infinity
    );
  }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
