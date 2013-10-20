var connect = require('connect');
var statics = require('./middleware/jutte-static');
var router  = require('./middleware/router');

exports.start = function(port){

    connect()
            .use(statics.handle)
            .use(router.route)
            .listen(port);
};