import { describe, it, expect } from 'vitest';
import { build } from '../src/app';

const app = build(); // 

// Test para GET /
describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/',
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ message: 'Hello, World!' });
  });
});



/*describe('POST /echo', () => {
  it('should return the same body received', async () => {
    const body = { nombre: 'Stephano', edad: 30 };
    const response = await app.inject({
      method: 'POST',
      url: '/echo',
      payload: body,
    });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ received: body });
  });
}); */