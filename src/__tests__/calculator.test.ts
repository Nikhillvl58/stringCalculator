import { Calculator } from "../calculator";


describe('Calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('when string is empty should return 0', () => {
        expect(calculator.add('')).toBe(0);
    });

    it('should add any amount of numbers', () => {
        expect(calculator.add('1,2,3')).toBe(6);
        expect(calculator.add('1,2,3,4,5')).toBe(15);
    });
})