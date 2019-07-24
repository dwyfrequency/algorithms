// Time O(n) | Space O(n)
const containsDuplicate = arr => {
  const set = new Set();
  for (const item of arr) {
    if (set.has(item)) return true;
    else set.add(item);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 4, 1]));
console.log(containsDuplicate([1, 2, 4, 3]));
