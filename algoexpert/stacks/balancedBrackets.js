function balancedBrackets(string) {
  // Write your code here.
  // 	Example {[]}
  const bracketMatchObj = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  const stack = [];
  for (const char of string) {
    // first expression checks that there are entries in the stack
    if (stack.length && stack[stack.length - 1] === bracketMatchObj[char]) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

console.log(balancedBrackets('(()())((()()()))')); // true
