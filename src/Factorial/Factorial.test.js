// import Alg from './Factorial'
import * as Algorithm from '../Algorithm';

test('0! = 1', () => {
    expect(Algorithm.Factorial(0)).toBe(1);
});

test('1! = 1', () => {
    expect(Algorithm.Factorial(1)).toBe(1);
});

test('4! = 24', () => {
    expect(Algorithm.Factorial(4)).toBe(24);
});