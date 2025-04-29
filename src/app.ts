import fastify from 'fastify';
import { FastifyRequest, FastifyReply } from 'fastify';

export function build() {
  const app = fastify();

  // 1. GET /
  app.get('/', async (_request: FastifyRequest, reply: FastifyReply) => {
    return { message: 'Hello, World!' };
  });

  // 2. POST /echo
  app.post('/echo', async (request, reply) => {
    const body = request.body;
    return reply.status(200).send({ received: body });
  });

  // ✅ 3. PUT /item/:id
  app.put('/item/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    return { receivedParam: id };
  });

  // 4. GET /query?id=...
  app.get('/query', async (request, reply) => {
    const { id } = request.query as { id: string };
    return { id };
  });

  return app;
}