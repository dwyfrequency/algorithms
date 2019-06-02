# algorithms

## Bottom Up

### Avoiding Recursion

Because recursion can add to space complexity, assuming no Tail Call Optimization, we may want to avoid using recursion. To do so, we will want to take a bottoms up approach instead of top down.

```
// Too space intensive! O(N)
function product1ToN(n) {
  // We assume n >= 1
  return (n > 1) ? (n * product1ToN(n-1)) : 1;
}
// Yay! O(1)
function product1ToN(n) {
  // assuming n >= 1
  let result = 1;
  for (let num = 1; num <= n; num++) {
    result *= num;
  }

  return result;
}
```

## Recursion

Always have a base case

## Big O Space

### Recursion

Tail call optimization (TCO): where the compiler can optimize some recursive functions to avoid building up a tall call stack. The JavaScript spec recently allowed TCO. In general, best not to assume your compiler/interpreter will do this work for you. Note, the recursive call has to be the last line like below. It would take this from O(N) to O(1)

```
  function product1ToN(n) {
  // We assume n >= 1
  return (n > 1) ? (n * product1ToN(n-1)) : 1;
}
```
