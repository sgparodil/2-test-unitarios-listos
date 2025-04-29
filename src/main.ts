import { build } from './app';

const app = build();

const start = async () => {
  try {
    await app.listen({ port: 3002 });
    console.log('Servidor corriendo en http://localhost:3002');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();