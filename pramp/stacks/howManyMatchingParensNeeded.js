// Time O(n) | Space O(n)
/*
first attempt - when i didnt know order mattered
function bracketMatch(text) {
  // your code goes here
  const openingStack = []
  const closingStack = []
  let opening = '('
  for(const ch of text) {
    if(ch === opening) openingStack.push(ch)
    else closingStack.push(ch)
  }
  return Math.abs(openingStack.length - closingStack.length)
}*/
// Time O(n) | Space O(n)
function bracketMatch(text) {
  // your code goes here
  const openingStack = [];
  let opening = '(';
  let mismatchCnt = 0;
  for (const ch of text) {
    if (ch === opening) openingStack.push(ch);
    else if (openingStack.length) openingStack.pop();
    else mismatchCnt += 1;
  }
  return openingStack.length + mismatchCnt;
}

// Time O(n) | Space O(1)
function bracketBetterSpace(text) {
  // your code goes here
  let delta = 0; // tracks total delta for open/closed
  let mismatchCnt = 0; // tracks where the order is incorrect
  let opening = '(';
  for (const ch of text) {
    if (ch === opening) {
      delta += 1;
    } else if (mismatchCnt < 0) {
      mismatchCnt += 1;
      delta -= 1;
    } else {
      delta -= 1;
    }
  }
  return delta + mismatchCnt;
}

/*
1. ensure that all brackets have a matching opening and closing
2. create hashmap for looking up bracket
3. if matching brackets, we can remove them from a stack
4. then at end, we will return the length of the stack

We'll have our matching stack
-> will hold all of our closing parens
-> each time we get an opening we'll try to pop off from that stack
-> if for example ')' => increment our missmatch counter

EXAMPLES:
() => 0
()( => 1
) => 1

Failing
"())(" => 2 order matters
")(" => 2  order matters
*/
