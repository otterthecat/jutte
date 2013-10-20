const HTTP_HEADERS_WITHOUT_PREFIX = {
'CONTENT_LENGTH': true,
'CONTENT_TYPE': true
};

var http = require('http');
var routes  = require('./app/server/routes').routes;

function cgiKeyToHttpHeader(key) {
if (HTTP_HEADERS_WITHOUT_PREFIX[key]) {
return key.toLowerCase().replace(/_/g, '-');
} else if (key.match(/^HTTP_/)) {
return key.replace(/^HTTP_/, '').toLowerCase().replace(/_/g, '-');
} else {
return undefined;
}
}

function inferHttpVersion(protocolDescription) {
var match = protocolDescription.match(/^HTTP\/(.+)/);
if (match) {
return match[1];
}
}

function createIncomingMessage(headers, socket) {
var message = new http.IncomingMessage(socket);
message.cgiHeaders = headers;

for (var i = 0; i < headers.keys.length; i++) {
var key = headers.keys[i];
var header = cgiKeyToHttpHeader(key);
if (header !== undefined) {
message.headers[header] = headers[key];
}
}

message.httpVersion = inferHttpVersion(headers['SERVER_PROTOCOL']);
message.method = headers['REQUEST_METHOD'];
message.url = headers['REQUEST_URI'];
message.connection.remoteAddress = headers['REMOTE_ADDR'];
message.connection.remotePort = parseInt(headers['REMOTE_PORT']);

socket.on('data', function(chunk) {
    message.emit('data', chunk);
});
socket.on('end', function() {
    message.emit('end');
});
socket.on('close', function() {
    message.emit('close');
});
socket.on('drain', function() {
    message.emit('drain');
});
socket.on('timeout', function() {
    message.emit('timeout');
});

    return message;
}

function createServerResponse(req) {
    var res = new http.ServerResponse(req);
    res.assignSocket(req.socket);
    res.shouldKeepAlive = false;
    res.once('finish', function() {
    req.socket.destroySoon();
});
    return res;
}

var io = require('socket.io').listen(4000);

io.sockets.on('connection', function(socket){

    socket.on('hi', function(data){

        socket.emit('hello', "i got it");
    });
});


PhusionPassenger.on('request', function(headers, socket) {
    var req = createIncomingMessage(headers, socket);
    var res = createServerResponse(req);
    routes.route(req, res);
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.write('hello world');
    // res.end();
});