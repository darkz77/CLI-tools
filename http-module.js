const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the homepage");
  }
  if (req.url === "/about") {
    res.end("Welcome to About page");
  }
  res.end(
    `<h1>Opps!</h1>
    <a href="/"> Back home </a>
    `,
  );
});

server.listen(5000)
