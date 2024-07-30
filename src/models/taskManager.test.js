const { addTask } = require('./taskManager');

describe('addTask', () => {
  it('adds a new task correctly', async () => {
    const task = { name: 'Test Task', completed: false };
    await expect(addTask(task)).resolves.toBe('Task added successfully');
  });

  it('throws an error for invalid task data', async () => {
    const task = { name: ''}; //Invalid because 'completed' is missing
    await expect(addTask(task)).rejects.toThrow('Invalid task data');
  });
});
