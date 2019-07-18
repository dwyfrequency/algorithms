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
