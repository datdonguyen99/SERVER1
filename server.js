const aedes = require("aedes")();
const httpServer = require("http").createServer();
const ws = require("websocket-stream");
require("dotenv").config();
const wsPort = process.env.WSPORT || 80;

ws.createServer({ server: httpServer }, aedes.handle);

httpServer.listen(wsPort, () => {
  console.log("websocket server listening on port ", wsPort);
});
