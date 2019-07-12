function hasSingleCycle(array) {
  // Write your code here.
  let stepPnt = 0,
    curStepIdx = 0;
  const idxSet = new Set();
  while (stepPnt < array.length) {
    const newStepIdx = (array[stepPnt] + curStepIdx) % array.length;
    if (idxSet.has(newStepIdx)) return false;
    idxSet.add(newStepIdx);
    stepPnt++;
    curStepIdx = newStepIdx;
  }
  return idxSet.length === array.length;
}

console.log(hasSingleCycle([0, 1, 1, 1, 1]));

// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;
