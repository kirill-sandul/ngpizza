const json_server = require('json-server');
const server = json_server.create();
const router = json_server.router('./db.json');
const middlewares = json_server.defaults();

const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log('server');
});