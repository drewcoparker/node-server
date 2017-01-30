// Include the http module, part of core, so no npm install needed.
var http = require("http");
// Include the fs module. fs = file system.


function renderHomepage(req, res) {
    res.writeHead(200, {"content-type": "text/html"});
    res.write("<h1>This is the homepage</h1>");
    res.write("<p>I'm very proud of my node routing ability</p>");
    res.write("<p>I made a page in node</p>");
    res.end();
}

// Set up an http server to run anytime someone hits the port.
var server = http.createServer((req, res) => {
    console.log("Someone conneted to our server!");
    // The url requested is in the req object, url property
    // console.log(req.url);
    // res.end("sanity check");

    // Someone came to our homepage, give them the content
    if (req.url === '/') {
        renderHomepage(req, res);
    } else {
        res.writeHead(404, {"content-type": "text/html"});
        res.end("Sorry this page does not exist");
    }
});

// Tell the server to listen to port 8000.
server.listen(8000);
console.log("server is listening for http traffic at port 8000...");
