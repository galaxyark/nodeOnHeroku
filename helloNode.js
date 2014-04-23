var http = require('http');
var port = process.env.PORT || 8000;
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello Node.js\n');
}).listen(port);

console.log('Server running at Heroku');
console.log('hopeful this time it works.');
