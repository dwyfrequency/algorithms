// Time O(N) | Space O(N);
function caesarCipherEncryptor(string, key) {
  // Write your code here.
  let startCharCode = 'a'.charCodeAt(0) - 1;
  let endCharCode = 'z'.charCodeAt(0);
  const arr = [];
  key %= 26;
  for (let i = 0; i < string.length; i++) {
    let newCode = string.charCodeAt(i) + key;
    if (newCode > endCharCode) {
      newCode = (newCode % endCharCode) + startCharCode;
    }
    arr.push(newCode);
  }
  return String.fromCharCode(...arr);
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
