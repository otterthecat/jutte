var fs         = require('fs');
var path       = require('path');
// var controller = require('./controllers');
var statics = require('../configs/static-config').statics;

exports.handle = function(req, res, next){

    var _url = req.url;
    var _ext = path.extname(_url).substr(1);

    if(!statics.hasOwnProperty(_ext)){

        next();
    } else {

        fs.readFile(statics[_ext].path + _url, function(err, data){

            if(!err){

                res.writeHeader(200, {'Content-Type': statics[_ext].type});
                res.write(data);
                res.end();
            } else {

                res.writeHeader(404, {'Content-Type': "text/html"});
                res.write("static file not found");
                res.end();
                // controller.writeResponse(res, 404, "<h1>Custom 404</h1>" + err);
            }
        });
    };
};