import * as jsonServer from 'json-server';

import * as path from 'path';

import { auth, scopes} from './middleware';

const port = process.env.PORT || 9000;
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const middlewares = jsonServer.defaults();



server.use(middlewares);
server.use(auth);
server.use(scopes);
server.use('/v1',router);
server.listen(port, () => {
  console.log("JSON server is listening on port " + port );
});
