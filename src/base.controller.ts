// src/base.controller.ts
import { FastifyRequest, FastifyReply } from 'fastify';

export async function helloWorldApi(request: FastifyRequest, reply: FastifyReply) {
  return 'Hello, World!';
}