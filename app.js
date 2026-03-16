const http = require('http');

const server = http.createServer((req,res) => {
  if (req.url === "/") {
    return res.end("Welcome to my Home page");
  }
  if (req.url === "/about") {
    return res.end("Welcome to About page");
  }
  res.end(
    `
    <h1>No page Found</h1>
    <a href='/'>Go back</a>
    `
  );
});

server.listen(5000);