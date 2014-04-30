var http = require('http');
var url = require('url');
var querystring = require('querystring');
var port = process.env.PORT || 8000;

http.createServer(function(req, res){
	var path = url.parse(req.url).pathname;
	var urlString = {
		pathname: url.parse(req.url).pathname,
		queryparam: querystring.parse(url.parse(req.url).query)
	};

	callback = urlString.queryparam.callback;
	console.log("a request was received for:" + callback);
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(callback + "(" + "{'data': 'test'}" + ")");
}).listen(port);
