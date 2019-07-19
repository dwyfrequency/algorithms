/*
Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike.

Function Description

Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.

countingValleys has the following parameter(s):

n: the number of steps Gary takes
s: a string describing his path
Input Format

The first line contains an integer , the number of steps in Gary's hike.
The second line contains a single string , of  characters that describe his path.

Constraints

Output Format

Print a single integer that denotes the number of valleys Gary walked through during his hike.

Sample Input

8
UDDDUDUU
Sample Output

1
Explanation

If we represent _ as sea level, a step up as /, and a step down as \, Gary's hike can be drawn as:

_/\      _
   \    /
    \/\/
He enters and leaves one valley.

*/

// (n: int, s: str) -> int
function countingValleys(n, s) {
  /* when coming out of a valley our most recent character will be a 'U'
  So if the cnt ever hits zero just check if it was a U then increment or nah */
  let totalLetterBal = 0,
    valleyCnt = 0;
  for (let i = 0; i < n; i++) {
    totalLetterBal += s[i] === 'U' ? 1 : -1;
    if (totalLetterBal === 0) {
      valleyCnt += s[i] === 'U' ? 1 : 0;
    }
  }
  return valleyCnt;
}

// Time O(n) | Space O(n)
function countingValleysForOf(n, s) {
  // cnt will keep current balance of up and downs
  // valley cnt will cnt how often then cnt becomes negative
  // which indicates a valley
  let cnt = 0,
    valleyCnt = 0;
  for (const letter of s) {
    if (letter === 'D') {
      cnt--;
      // if will capture first step into the valley
      if (cnt === -1) valleyCnt++;
    } else {
      cnt++;
    }
  }
  return valleyCnt;
}
