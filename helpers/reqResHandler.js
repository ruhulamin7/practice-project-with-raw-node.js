// dependencies
const url = require("url");

//module wrapper
const handler = {};

// request and response handler
handler.reqResHandler = (req, res) => {
  const method = req.method.toLowerCase();
  const headersObj = req.headers;
  const reqUrl = url.parse(req.url, true);
};

module.exports = handler;
