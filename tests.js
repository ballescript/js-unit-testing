const chai = window.chai;
const expect = chai.expect;

describe('getCelsius', () => {
    it('converts values of array from Fahrenheit to Celsius', () => {
        expect(getCelsius([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5])
        expect(getCelsius([32, 239, 50, 59])).to.deep.equal([0, 115, 10, 15])
    })
})