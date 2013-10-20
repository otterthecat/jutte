var fs = require('fs');

var _writeContent = function(res, path){

    fs.readFile(path, function(err, data){

        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
};

var Controller = function(){

    this.requestData = null;
    this.view = null;
};

Controller.prototype = {

    extend: function(str, fn){

        this.prototype[str] = fn;
        return this;
    },

    loadModel: function(name, params){

        _model = require(name);
        return new _model(params);
    },

    setView: function(path){

        this.view = path;
        return this;
    },

    render: function(res, path){

        _writeContent(res, path);
    }
}

module.exports = new Controller();