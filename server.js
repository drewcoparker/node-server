
var http = require("http");
// Request and resolve. These params will always be used with createServer().
// It's common practice to use req and res for the param names.
var server = http.createServer((req, res) => {
    // console.log(req.rawHeaders[1]);
    res.writeHead(418, {"content-type": "text/html"});
    res.end("<h1>Hello, friend. This is your node server.<h1>")
})

var port = 8000;
console.log(`Server listening on port ${port} for connections...`);
server.listen(port);
