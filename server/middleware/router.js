exports.route = function (req, res){

    var _uri                  = req.url.substr(1);
    var _uriArray             = _uri.split('/');

    var _requested_controller = _uriArray.shift();
    var _controller           = require('../../controllers/' + _requested_controller);

    if(_uriArray.length > 0){

        _controller[_uriArray.shift()](req, res, _uriArray);
    } else {

        _controller.index(req, res);
    }
};