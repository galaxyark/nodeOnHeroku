var http = require('http');
var url = require('url');
var port = process.env.PORT || 8000;

http.createServer(function(req, res){
	var path = url.parse(request.url).pathname;
	console.log("a request was received for:" + path);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello Node.js\n');
}).listen(port);
