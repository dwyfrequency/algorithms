/*
Good description of debounce and throttle https://chrisboakes.com/how-a-javascript-debounce-function-works/
We take in a function and the delay,
we have a closure for our time, that we reset each time our function is called
by resetting and clearing the timeout. Our function only runs when a user
pauses. Good for scrolling effect or ajax call on search input */
const debounce = (fn, delay) => {
  let timer;
  return function(...args) {
    // need to use action function keyword here b/c if we're just using a
    // basic input with vanilla js, the event listener binds the
    // input to the func
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, ...args);
    }, delay);
  };
};

const debouncedFunc = debounce(MyFunction, 500);

document.getElementById('inputBox').addEventListener('keyup', debouncedFunc);

function MyFunction() {
  console.log('MyFunction', this);
  console.log('MyFunction value', this.value);
}

// to test just create an html doc with <input id='inputBox' />
