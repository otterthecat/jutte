exports.index = function(req, res){

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('hello world');
    res.end();
};