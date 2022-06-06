// dependencies
const http = require("http");
const { reqResHandler } = require("./helpers/reqResHandler");

// module wrapper
const app = {};
app.config = {
  port: 4000,
};

// creating server
app.createServer = () => {
  const server = http.createServer(app.reqResHandler);
  server.listen(app.config.port, () => {
    console.log(`Server is listening on http://localhost:${app.config.port}`);
  });
};

app.reqResHandler = reqResHandler;

// server initialization
app.createServer();
