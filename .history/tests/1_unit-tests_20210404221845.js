const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('Whole number input', (done) => {
        let input = '12L';
        assert.equal(convertHandler.getNum(input), 12);
        done();
    });

    test('Decimal input', (done) => {
        let input = '12.5L';
        assert.equal(convertHandler.getNum(input), 12.5);
        done();
    });

    test('Fractional input', (done) => {
        let input = '1/25L';
        assert.equal(convertHandler.getNum(input), 1/25);
        done();
    });

    test('Fractional input with decimal', (done) => {
        let input = '10.5/25L';
        assert.equal(convertHandler.getNum(input), 10.5/25);
        done();
    });

    test('Double fraction, invalid input', (done) => {
        let input = '1/3/12L';
        assert.equal(convertHandler.getNum(input), undefined);
        done();
    });

    test('No numerical input', (done) => {
        let input = 'L';
        assert.equal(convertHandler.getNum(input), 1);
        done();
    });
});

suite('Function convertHandler.getUnit(input', () => {
    test('For each valid unit inputs', (done) => {
        let input = [
          'l',
          'gal',
          'km',
          'mi',
          'kg',
          'lbs',
          'L',
          'GAL',
          'KM',
          'MI',
          'KG',
          'LBS'
        ];

        let output = [
          'L',
          'gal',
          'km',
          'mi',
          'kg',
          'lbs',
          'L',
          'gal',
          'km',
          'mi',
          'kg',
          'lbs'
        ];
        input.forEach((ele) => {

        });
    });
});