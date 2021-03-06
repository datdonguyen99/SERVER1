const aedes = require("aedes")();
const httpServer = require("http").createServer();
const ws = require("websocket-stream");
require("dotenv").config();
const port = process.env.PORT || 1357;

ws.createServer({ server: httpServer }, aedes.handle);

httpServer.listen(port, () => {
  console.log("websocket server listening on port ", port);
});
