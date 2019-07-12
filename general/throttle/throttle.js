const throttle = (delay, func) => {
  let lastExecutedCallTime = 0;
  return (...args) => {
    const currentTime = Date.now();
    if (currentTime - lastExecutedCallTime > delay) {
      lastExecutedCallTime = currentTime;
      func(...args);
    }
  };
};

const throttledFunc = throttle(0.001, x => console.log(x));
for (let i = 0; i < 40; i++) {
  throttledFunc(i);
}
