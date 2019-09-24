import * as jsonServer from 'json-server';

import * as path from 'path';

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const middlewares = jsonServer.defaults();

import { auth } from './middleware';


server.use(middlewares);
server.use(auth);

server.use(router);
server.listen(3000, () => {
  console.log("JSON server is listening on port 3000");
});
