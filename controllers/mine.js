var privateMethods = require('../lib/Controller');

exports.index = function(req, res, data){

    privateMethods.render(res,'views/index.html');
};

exports.stuff = function(req, res, data){

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('I also own this - ' + data[0]);
    res.end();
};