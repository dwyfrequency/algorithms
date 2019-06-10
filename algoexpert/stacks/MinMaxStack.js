// Feel free to add new properties and methods to the class.
class MinMaxStack {
  constructor() {
    this.stack = [];
    this.min = null;
    this.max = null;
  }
  // Time O(1) | Space O(1)
  peek() {
    // Write your code here.
    return this.stack[this.stack.length - 1];
  }

  // Time O(N) | Space O(1)
  // worst case we have to go through all elements to get the min || max
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

  // Time O(1) | Space O(1)
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

  // Time O(1) | Space O(1)
  getMin() {
    // Write your code here.
    return this.min;
  }

  // Time O(1) | Space O(1)
  getMax() {
    // Write your code here.
    return this.max;
  }

  // Time O(N) | Space O(1)
  setMin() {
    this.min = this.stack.reduce(
      (accum, num) => (accum > num ? num : accum),
      Infinity
    );
  }

  // Time O(N) | Space O(1)
  setMax() {
    this.max = this.stack.reduce(
      (accum, num) => (accum < num ? num : accum),
      -Infinity
    );
  }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
