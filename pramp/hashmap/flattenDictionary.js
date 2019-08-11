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


// {} -> {}
// Time O(n) | Space O(n)
function flattenDictionary(dict, returnDict = {}, parentKey = []) {
  // your code goes here
  for(const key in dict) {
      if(dict.hasOwnProperty(key)) {
        //
        if(typeof dict[key] !== 'object') {
        if(parentKey.length) {
          if(key) returnDict[`${parentKey.join('.')}.${key}`] = dict[key]
          else returnDict[`${parentKey.join('.')}`] = dict[key]

        else returnDict[key] = dict[key]
      } else {
        flattenDictionary(dict[key], returnDict, key ? parentKey.concat(key) : parentKey)
      }
    }
  }
  return returnDict
}


console.log(flattenDictionary( {
            "Key1" : "1",
            "Key2" : {
                "a" : "2",
                "b" : "3",
                "c" : {
                    "d" : "3",
                    "e" : {
                        "" : "1"
                    }
                }
            }
        }))
