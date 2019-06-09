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
    // second, if the top of the stack equals the characters matching opening
    // pop it off b/c it's a match
    if (stack.length && stack[stack.length - 1] === bracketMatchObj[char]) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

console.log(balancedBrackets('(()())((()()()))')); // true
