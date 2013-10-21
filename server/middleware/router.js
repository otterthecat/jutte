exports.route = function (req, res){

    var _uriArray   = req.url.substr(1).split('/');
    var _controller = require('../../controllers/' + _uriArray.shift());

    if(_uriArray.length > 0){

        _controller[_uriArray.shift()](req, res, _uriArray);
    } else {

        _controller.index(req, res);
    }
};