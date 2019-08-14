/*
 timestamp, the count of visitors, and whether the visitors entered or exited the mall
[time, visitorCnt, Enter(1)/Exit(0)]
 1. iterate through each timestamp, creating a localTotal num of visitor
 2. if that local total is greater than our overallTotal we'll reassign the val
  * if they equal one another, just take the earliest seen timestamp
 3. return timestamp
*/

/*
data = [          [1487799425, 14, 1], // 14
                 [1487799425, 4,  0], //  10
                 [1487799425, 2,  0], //  8 -> max
                 [1487800378, 10, 1], // 18 -> max
                 [1487801478, 18, 0], // 0
                 [1487801478, 18, 1], // 18
                 [1487901013, 1,  0], // 17
                 [1487901211, 7,  1], // 10
                 [1487901211, 7,  0] ] // 17


failed
[[1487799426,21,1]]

*/
// Time O(n) | Space O(1)
function findBusiestPeriod(data) {
  // your code goes here
  let lastTimeStamp = 0;
  let maxVisitorTimeStamp = 0;
  let maxVisitorCnt = -Infinity;
  let currentVisitorCnt = 0;
  for (const [timestamp, visitorCnt, isInMall] of data) {
    if (isInMall) currentVisitorCnt += visitorCnt;
    else currentVisitorCnt -= visitorCnt;
    if (timestamp !== lastTimeStamp) {
      if (currentVisitorCnt > maxVisitorCnt) {
        maxVisitorCnt = currentVisitorCnt;
        maxVisitorTimeStamp = lastTimeStamp;
        lastTimeStamp = timestamp;
      }
    }
  }
  if (currentVisitorCnt > maxVisitorCnt) {
    console.log('outside loop');
    maxVisitorCnt = currentVisitorCnt;
    maxVisitorTimeStamp = lastTimeStamp;
  }
  return maxVisitorTimeStamp;
}

function findBusiestPeriodV2(data) {
  let n = data.length;
  let count = 0;
  let maxCount = 0;
  let maxPeriodTime = data[0][0];

  for (let i = 0; i < n - 1; i++) {
    if (data[i][2] === 1) {
      count += data[i][1];
    } else {
      count -= data[i][1];
    }

    if (i < n - 1 && data[i][0] === data[i + 1][0]) {
      continue;
    }

    if (count > maxCount) {
      maxCount = count;
      maxPeriodTime = data[i][0];
    }
  }

  if (data[n - 1][2] === 1) {
    count += data[n - 1][1];
  } else {
    count -= data[n - 1][1];
  }

  if (count > maxCount) {
    maxCount = count;
    maxPeriodTime = data[n - 1][0];
  }

  return maxPeriodTime;
}

console.log(
  findBusiestPeriod([
    [1487799425, 21, 0],
    [1487799427, 22, 1],
    [1487901318, 7, 0],
  ])
);
