/*
1. Iterate through the dictionary
2. test the value
 * if primitive -> keep it the same
 * else iterate through all of the nested obj (same steps as above)
    * maybe recursion or helper func
3. return new objection
*/

/*
{"Key1" : "1",
  "Key2" : {
      "a" : "2",
      "b" : "3"
      "c" : {
                    "d" : "3",
                    "e" : {
                        "" : "1"
                    }
                }
   }
 }

current
{
"Key1" : "1",
Key2.a = '2'

}

*/
const getKeyName = (key, parentKeys = []) => {
  let returnStr = key;
  if (parentKeys.length) {
    if (key) returnStr = `${parentKeys.join('.')}.${key}`;
    else returnStr = `${parentKeys.join('.')}`;
  }
  return returnStr;
};

// {} -> {}
// Time O(n) | Space O(n)
function flattenDictionary(dict, returnDict = {}, parentKey = []) {
  // your code goes here
  // eslint-disable-next-line guard-for-in
  for (const key in dict) {
    if (dict.hasOwnProperty(key)) {
      if (typeof dict[key] !== 'object') {
        returnDict[getKeyName(key, parentKey)] = dict[key];
      } else {
        flattenDictionary(
          dict[key],
          returnDict,
          key ? parentKey.concat(key) : parentKey
        );
      }
    }
  }
  return returnDict;
}
const dict = { Key1: '1', Key2: { a: '2', b: '3', c: { d: '3', e: '1' } } };

console.log(flattenDictionary(dict));
