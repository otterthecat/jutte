var privateMethods = require('../lib/Controller');

exports.index = function(req, res, data){

    privateMethods.render(res,'views/index.html');
};

exports.stuff = function(req, res, data){

    privateMethods.render(res,'views/index.html');
};