const teamObj = require('./team.js');

test('checks the structure of the object it returns', () => {
    const result = teamObj('Judoboy', 100);

    expect(result.teamName).toBe('Judoboy');
    expect(result.level).toBe(100);
    expect(result.points).toBe(0);
  });

