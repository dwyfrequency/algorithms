const { scheduler } = require('./scheduler');

describe('scheduler', () => {
  let agent, client;
  beforeEach(() => {
    agent = null;
    client = null;
  });
  test('should return schedule intersection', () => {
    agent = [[1, 4], [8, 9], [20, 24]];
    client = [[2, 3], [7, 10], [21, 23]];
    expect(scheduler(agent, client)).toEqual([[2, 3], [8, 9], [21, 23]]);
  });

  test('should return schedule intersection', () => {
    agent = [[1, 20]];
    client = [[2, 3], [7, 10], [21, 23]];
    expect(scheduler(agent, client)).toEqual([[2, 3], [7, 10]]);
  });
  test('should return schedule intersection', () => {
    agent = [[1, 22]];
    client = [[2, 3], [7, 10], [21, 23]];
    expect(scheduler(agent, client)).toEqual([[2, 3], [7, 10], [21, 22]]);
  });
});

// npm test companyQs/arrays/schedulerIntersection/scheduler.test.js
