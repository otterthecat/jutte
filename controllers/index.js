var privateMethods = require('../lib/Controller');

exports.index = function(req, res){

    privateMethods.renderHTML(res,'views/index.html');
};