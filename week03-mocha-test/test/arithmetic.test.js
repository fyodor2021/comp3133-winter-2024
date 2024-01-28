var assert = require('assert');
const arithmetic = require('../app/arithmetic')
describe('validating Arithmetic Function', function () {
    
    it('should return 7 when the values are 5 + 2', function () {
        assert.equal(arithmetic.add(5, 2), 7);
    });

    it('should return 7 when the values are 5 + 2', function () {
        assert.equal(arithmetic.add(5, 2), 8);
    });

    it('should return 3 when the values are 5 - 2', function () {
        assert.equal(arithmetic.subtract(5, 2), 3);
    });

    it('should return 3 when the values are 5 - 2', function () {
        assert.equal(arithmetic.subtract(5, 2), 5);
    });

    it('should return 10 when the values are 5 * 2', function () {
        assert.equal(arithmetic.multiplicaiton(5, 2), 10);
    });

    it('should return 10 when the values are 5 * 2', function () {
        assert.equal(arithmetic.multiplicaiton(5, 2), 12);
    });

    it('should return 5 when the values are 10 / 2', function () {
        assert.equal(arithmetic.div(10, 2), 5);
    });

    it('should return 5 when the values are 10 / 2', function () {
        assert.equal(arithmetic.div(10, 2), 6);
    });

});
