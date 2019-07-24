const containsDuplicate = arr => {
  const set = new Set();
  for (const item of arr) {
    if (set.has(item)) return true;
    else set.add(item);
  }
  return false;
};
