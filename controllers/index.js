var privateMethods = require('../lib/Controller');

exports.index = function(req, res){

    privateMethods.render(res,'views/index.html');
};