const http = require('http');
const fs = require('fs');

function start(hostname, port, controller) {
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(controller.index));
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

  return server;
}

module.exports = {
  start
};
