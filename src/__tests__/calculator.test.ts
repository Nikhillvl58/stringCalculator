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

    it('should support different delimiters', () => {
        expect(calculator.add('//;\n1;2')).toBe(3);
        expect(calculator.add('//#\n2#3#4')).toBe(9);
    });

    it('should throw an exception for negative numbers', () => {
        expect(() => calculator.add('1,-2,3')).toThrow('negative numbers not allowed: -2');
        expect(() => calculator.add('1,-2,-3')).toThrow('negative numbers not allowed: -2, -3');
    });
})