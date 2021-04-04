const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('Whole number input', (done) => {
        let input = '12L';
        assert.equal(convertHandler.getNum(input), 32);
        done();
    });

});