//class
var expect = require('chai').expect;

describe('Main', function () {
    var arr;

    before(() => {/*TODO database connection*/ });

    beforeEach(() => {
        arr = [1, 2, 3];
    });

    afterEach(() => { })

    after(() => {/*TODO close database connection*/ });

    //smoke test - mais básico
    it('should be an array', () => {
        expect(arr).to.be.an('array');
    });

    it('should have a size = 4 when push another value to array', () => {
        arr.push(4);
        expect(arr).to.have.lengthOf(4)
    });

    it('should remove the value 3 when pop array', () => {
        arr.pop();
        expect(arr).to.not.include(3)
    });

    it('should have a size = 2 when pop array', () => {
        arr.pop();
        expect(arr).to.have.lengthOf(2)
    });

    it('should return TRUE when pop 3 from the array', () => {
        expect(arr.pop() === 3).to.be.true;
    })

});