const request = require('supertest');
const app = require('../app');

describe('Todo Routes', () => {
  it('should get a list of todos', async () => {
    const response = await request(app).get('/todos');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Success');
    expect(response.body.data).toBeDefined();
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it('should get a specific todo', async () => {
    const response = await request(app).get('/todos/1');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Success');
    expect(response.body.data).toBeDefined();
  });

  it('should create a new todo', async () => {
    const response = await request(app)
      .post('/todos')
      .send({ title: 'New Todo', completed: false });
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Success');
    expect(response.body.data).toBeDefined();
  });

  it('should delete a todo', async () => {
    const response = await request(app).delete('/todos/1');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Success');
  });
});

