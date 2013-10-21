var privateMethods = require('../lib/Controller');

exports.index = function(req, res, data){

    privateMethods.renderHTML(res,'views/index.html');
};

exports.stuff = function(req, res, data){

    privateMethods.renderJSON(res, {cat: data[0], dog: data[1]});
};