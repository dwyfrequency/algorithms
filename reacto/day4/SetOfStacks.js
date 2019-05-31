// Prompt - https://gist.github.com/dhf-fullstack/51f865b45060a3fa584a2f1c164a7c6c
// Solution - https://gist.github.com/dhf-fullstack/23362409f27a551007a88f067474e7dc
/*
var mySetOfStacks = new SetOfStacks(5);
//this create a new instance of a SetOfStacks with max capacity 5
mySetOfStacks.push(3);
mySetOfStacks.push(5);
mySetOfStacks.push(7);
mySetOfStacks.push(9);
mySetOfStacks.push(4);
//mySetOfStacks should currently consist of one stack with 5 elements
mySetOfStacks.push(2);
//since the previous stack is at max capacity, a new stack should be created
//mySetOfStacks now has 2 stacks– one with 1 element (the 2 just added) and another with 5 elements
mySetOfStacks.pop();
//this should return 2. mySetOfStacks should now consist of just one stack (with 5 elements)
mySetOfStacks.push(8);
//mySetOfStacks should now have two stacks again (one with one element- the 8 just added- and the other with five elements)
mySetOfStacks.pop();
//returns 8. mySetOfStacks now consists of just one stack (with five elements)
mySetOfStacks.pop();
//returns 4. mySetOfStacks still consists of one stack (with four elements now)
mySetOfStacks.push(1);
//mySetOfStacks now has one stack with five elements
mySetOfStacks.push(6);
//a new stack will be created since the previous stack was full.
//mySetOfStacks now has two stacks (one with five elements and one with one element- the 5 just added)


*/
class Node {
  constructor(value) {
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(value) {
    const newTop = new Node(value);
    if (!this.top) {
      this.top = newTop; // pushing to empty stack
    } else {
      newTop.next = this.top;
      this.top = newTop;
    }
    this.length++;
  }
  pop() {
    if (!this.top) return null; // stack is empty
    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.length--;
    return poppedValue;
  }
  peek() {
    if (!this.top) return null; // stack is empty
    return this.top.value;
  }
}

class SetOfStacks {
  constructor(maxLength) {
    this.maxLength = maxLength;
    this.stacksOfStacks = new Stack();
    this.currentStack = null;
  }
  push(value) {
    console.log(value);
  }
  pop() {
    console.log();
  }
}

const stackOfStacks = new SetOfStacks(2);
stackOfStacks.push(1);
stackOfStacks.push(2);
stackOfStacks.push(3);
stackOfStacks.push(4);
stackOfStacks.push(5);
console.log(stackOfStacks.pop());
console.log(stackOfStacks.pop());

console.log(stackOfStacks);

// Implemented with array
// class SetOfStacks {
//   constructor(maxLength) {
//     this.maxLength = maxLength;
//     this.stacks = [[]];
//   }

//   push(value) {
//     this.stacks = this.stacks.reduce((accum, innerArr, idx) => {
//       if (innerArr.length < this.maxLength) {
//         accum.push(innerArr.concat(value));
//       } else if (idx + 1 === this.stacks.length) {
//         accum.push(innerArr, [value]);
//       } else {
//         accum.push(innerArr);
//       }
//       return accum;
//     }, []);
//   }

//   pop() {
//     const lastArr = this.stacks[this.stacks.length - 1];
//     if (lastArr.length === 1) {
//       this.stacks = this.stacks.filter(x => x !== lastArr);
//       return lastArr[0];
//     } else {
//       return lastArr.splice(lastArr.length - 1, 1)[0];
//     }
//   }
// }
