import * as jsonServer from 'json-server';

import * as path from 'path';

const port = process.env.PORT || 9000;
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const middlewares = jsonServer.defaults();

import { auth } from './middleware';


server.use(middlewares);
server.use(auth);
server.use('/v1',router);
server.listen(port, () => {
  console.log("JSON server is listening on port " + port );
});
