// Time O(N) | Space O(N);
function caesarCipherEncryptor(string, key) {
  // minus one so it can wrap around. 1 will now equal 'a' on wrap
  let startCharCode = 'a'.charCodeAt(0) - 1;
  let endCharCode = 'z'.charCodeAt(0);
  const arr = [];
  key %= 26;
  for (let i of string) {
    let newCode = i.charCodeAt(0) + key;
    if (newCode > endCharCode) {
      newCode = (newCode % endCharCode) + startCharCode;
    }
    arr.push(newCode);
  }
  return String.fromCharCode(...arr);
}

caesarCipherEncryptor('abz', 1);
// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
