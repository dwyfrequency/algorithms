// Feel free to add new properties and methods to the class.
class MinMaxStackMe {
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

class MinMaxStackAlgo {
  constructor() {
    // stores has map of the min max for each step in the stack
    // ie. when we pop off the maximum or min, we dont need to recalc it. B/c it is not only stored for idx 5, it's stored for all.
    this.minMaxStack = [];
    this.stack = [];
  }
  // O(1) time | O(1) space
  peek() {
    return this.stack[this.stack.length - 1];
  }
  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }
  // O(1) time | O(1) space
  push(number) {
    const newMinMax = { min: number, max: number };
    if (this.minMaxStack.length) {
      const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
      newMinMax.min = Math.min(lastMinMax.min, number);
      newMinMax.max = Math.max(lastMinMax.max, number);
    }
    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }
  // O(1) time | O(1) space
  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }
  // O(1) time | O(1) space
  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
