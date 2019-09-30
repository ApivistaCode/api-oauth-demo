import * as jsonServer from 'json-server';

import * as path from 'path';

import { auth, scopes} from './middleware';
import { generateData } from './data';

const port = process.env.PORT || 9000;
const server = jsonServer.create();
const router = jsonServer.router(generateData(10));

const middlewares = jsonServer.defaults();



server.use(middlewares);
//server.use(auth);
//server.use(scopes);
server.use('/v1',router);
server.listen(port, () => {
  console.log("JSON server is listening on port " + port );
});
