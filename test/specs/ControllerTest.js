// assertion library
// /////////////////////////////////////////////////////////
var chai = require('chai').should();


// Mocks
// /////////////////////////////////////////////////////////
var viewPath = "my/path";
var mockObj = {red: "#ff0033", gray: "#555"};

// Module to test
// ////////////////////////////////////////////////////////
var controller = require('../../lib/Controller');

// Spec
describe('Controller', function(){

    it('Should have property "view"', function(){

        controller.should.haveOwnProperty('view');
    });

    it('Should have property "requestData"', function(){

        controller.should.haveOwnProperty('requestData');
    });

    describe('#setView', function(){

        it('Should set "view" property with valid String', function(){

            controller.setView(viewPath);
            controller.view.should.deep.equal(viewPath);
        });
    });

    describe("#extend", function(){

    });
});