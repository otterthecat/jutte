var fs = require('fs');

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

    renderHTML: function(res, path){

        fs.readFile(path, function(err, data){

            res.writeHeader(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    },

    renderJSON: function(res, data){

        res.writeHeader(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(data));
        res.end();
    }
};

module.exports = new Controller();