import { describe, it, expect } from 'vitest';
import { build } from '../src/app.ts';

describe('PUT /item/:id', () => {
  it('should return the same id received in the URL', async () => {
    const app = build();
    await app.ready();

    const id = '123';
    const response = await app.inject({
      method: 'PUT',
      url: `/item/${id}`,
    });

    console.log('Routes:', app.printRoutes()); // Para verificar que la ruta existe
    console.log('Status:', response.statusCode);
    console.log('Body:', response.body);

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ receivedParam: id });
  });
});