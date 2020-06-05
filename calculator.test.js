import calculator from './calculator';

describe('calculator', () => {
  const num1 = 10;
  const num2 = 2;
  describe('add', () => {
    it('performs the addition of two values', () => {
      expect(calculator.add(num1, num2)).toBe(12);
    });
  });
  describe('subtract', () => {
    it('performs the subtraction of two values', () => {
      expect(calculator.subtract(num1, num2)).toBe(8);
    });
  });
  describe('divide', () => {
    it('performs the division of two values', () => {
      expect(calculator.divide(num1, num2)).toBe(5);
    });
  });
  describe('multiply', () => {
    it('performs the multiplication of two values', () => {
      expect(calculator.multiply(num1, num2)).toBe(20);
    });
  });
});
