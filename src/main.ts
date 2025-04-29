import { build } from './app';

const app = build();

app.listen({ port: 3002 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Servidor escuchando en ${address}`);
});