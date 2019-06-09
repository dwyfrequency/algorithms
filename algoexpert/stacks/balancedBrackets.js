function balancedBracketsMe(string) {
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

// Time O(N) | Space O(N)
function balancedBracketsAlgoExp(string) {
  // Write your code here.
  // 	Example {[]}
  const openingBrackets = '[{(';
  const closingBrackets = ']})';
  const bracketMatchObj = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  const stack = [];
  for (const char of string) {
    // is it an opening bracket, ok push it to the stack
    if (openingBrackets.includes(char)) {
      stack.push(char);
      // is it a closing bracket, check if there is anything in the stack - no return false because it's unbalanced ex ']'
    } else if (closingBrackets.includes(char)) {
      if (!stack.length) {
        return false;
        // does the closing bracket, match the result from the hash table - ok pop off the the value and dont add the current
      } else if (stack[stack.length - 1] === bracketMatchObj[char]) {
        stack.pop();
      }
      // else it doesnt match and is therefore unbalanced
      else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(balancedBrackets('(()())((()()()))'));
