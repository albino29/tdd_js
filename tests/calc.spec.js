import { expect } from 'chai';
import { sum, sub, multi } from '../src/calc'

describe(':: Calc ::', () => {

    //smoke tests
    describe('Smoke Tests', () => {
        it('Should exists SUN method', () => {
            expect(sum).to.exist;
            expect(sum).to.be.a('function');
        });
    });

    describe("Sum", () => {
        it('Should return 4 when `sum(2,2)`', () => {
            expect(sum(2, 2)).to.be.equal(4);
        });
    });

    describe("Sub", () => {
        it('[SUB] Should return 4 when `sub(6,2)`', () => {
            expect(sub(6, 2)).to.be.equal(4);
        });

        it('[NEGATIVE NUMBER] Should return -4 when `sub(6,10)`', () => {
            expect(sub(6, 10)).to.be.equal(-4);
        });
    });

    describe("Multi", () => {
        it('[Multi] Should return 4 when `multi(2,2)`', () => {
            expect(multi(2, 2)).to.be.equal(4);
        });
    });
})