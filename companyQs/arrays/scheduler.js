/*
find intersection of times
[startTime, endTime]
agent [[1, 4], [8,9],[20, 24]]
customer [[2, 3], [7,10], [21, 23]]
-> [[2,3], [8,9], [21,23]]

agent [[1, 20]]
customer [[2, 3], [7,10], [21, 23]]
-> [[2,3], [7,10], [21,23]]

*/
// Time O(n + m) | Space O(m) -> whichever is the longer array
// ([arr], [arr]) -> [arr]
const scheduler = (agent, client) => {
  let agentPnt = 0,
    clientPnt = 0;
  const returnArr = [];
  while (agentPnt < agent.length && clientPnt < client.length) {
    const [agentStartTime, agentEndTime] = agentPnt;
    const [clientStartTime, clientEndTime] = clientPnt;
    const maxStart = Math.max(agentStartTime, clientStartTime);
    const minEnd = Math.min(agentEndTime, clientEndTime);
    if (maxStart < minEnd) returnArr.push([maxStart, minEnd]);
    if (agentEndTime === minEnd) agentPnt++;
    else clientPnt++;
  }
};

/*
Explanation:
We take the max start time and min end.
maxStart because anything before the maxStart is not an intersection
same with minEnd anything after the min end time does not have an overlap
at least for those two sub arrays

if maxStart < minEnd -> we have an overlap and can add it to our array

to decide what pnt to increment we need to see what has the minEnd time
as the arrays are sorted, we know that an overlap can only exist in an array
with a later start time so we increment the pnt of the array w/ the min start
*/
