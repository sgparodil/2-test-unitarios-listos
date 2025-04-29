import { test, expect } from 'vitest';
import Fastify from 'fastify';

test('POST /echo should return the same body received', async () => {
  const app = Fastify();

  app.post('/echo', async (request, reply) => {
    const body = request.body;
    return reply.status(200).send({ received: body });
  });

  const body = { message: 'Hola mundo' };

  const response = await app.inject({
    method: 'POST',
    url: '/echo',
    payload: body,
  });

  expect(response.statusCode).toBe(200);
  expect(response.json()).toEqual({ received: body });
});