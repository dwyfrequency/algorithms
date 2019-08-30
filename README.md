# algorithms

## General Tips

REACT is a way to handle whiteboard interview problems, and we’re going to get some preliminary practice: you’ll be doing these problems together in class throughout senior phase. We don’t have whiteboards in the video classrooms, of course, so use a text editor, or a drawing program, or even sketch on paper and hold the paper up to the camera to show the interviewer.

R - repeat the question to the interviewer. Ask questions if you aren’t sure about anything! Now is your time to make sure you understand the question.

E - examples: generate examples. Write them on the whiteboard (or in your text editor). Consider edge cases - empty inputs, unusual values.

A - approach: explain to the interviewer how you think you can solve the problem.

C - code: write your code on the whiteboard (or in our case, a text editor.) - You don’t have to run your code - it can even be pseudo-code. As long as you can
explain your approach in detail.

T - test: walk through your code with your examples. Demonstrate in detail how it works. You may uncover bugs. Fix them!

## Bottom Up

Useful for recursion and dynamic programming problems.
dynamic programming problems: are problems where the solution is composed of solutions to the same problem with smaller inputs (as with multiplying the numbers 1..n1..n, above).

## Memoization

[Memoization](https://www.interviewcake.com/concept/javascript/memoization?)

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

What is the blueprint for a recursive function?

1.  *Function definition* --- Our function should accept parameters. This way we can always test the value of these params to check whether or not we have reached the base case.
2.  *Defining our base case* --- What is the trivial case, where we already know the solution for the problem.
3.  *Make the problem smaller --- *Incrementing/decrementing our parameters which are passed into every recursive function call. If we don't do this, our problem will never be terminated, and we will hit an infinite loop.

## Big O Space

### Recursion

Tail call optimization (TCO): where the compiler can optimize some recursive functions to avoid building up a tall call stack. The JavaScript spec recently allowed TCO. In general, best not to assume your compiler/interpreter will do this work for you. Note, the recursive call has to be the last line like below. It would take this from O(N) to O(1)

```
  function product1ToN(n) {
  // We assume n >= 1
  return (n > 1) ? (n * product1ToN(n-1)) : 1;
}
```

## Dynamic Programming 

Need to add to this
- do the square problem
