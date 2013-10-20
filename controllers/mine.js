exports.index = function(req, res, data){

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('this is mine');
    res.end();
};

exports.stuff = function(req, res, data){
    console.log("DATA IS ");
    console.log(data);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('I also own this - ' + data[0]);
    res.end();
};