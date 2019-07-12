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
