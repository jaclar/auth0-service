var restify = require('restify');

function respond (req, res, next) {
  res.send({message: 'hello ' + req.params.name});
  next();
}

function healthCheck (req, res, next) {
  res.send({status: 'ok'});
  next();
}

function welcome (req, res, next) {
  res.send({message: 'Welcome 2018!'});
  next();
}

var server = restify.createServer();
server.get('/_health', healthCheck);

server.get('/', welcome);
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, () => {
  console.log(`${server.name} listening at ${server.url}`);
});
