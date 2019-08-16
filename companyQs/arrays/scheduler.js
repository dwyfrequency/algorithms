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
// Time O(n + m) | Space O(m)
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
