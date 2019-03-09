// import Alg from './Factorial'
import * as Algorithm from '../Algorithm';

// iterative
test('0! = 1', () => {
    expect(Algorithm.Factorial(0, 1)).toBe(1);
});

test('1! = 1', () => {
    expect(Algorithm.Factorial(1, 1)).toBe(1);
});

test('4! = 24', () => {
    expect(Algorithm.Factorial(4, 1)).toBe(24);
});

test('50! = 3.0414093201713376e+64', () => {
    expect(Algorithm.Factorial(50, 1)).toBe(3.0414093201713376e+64);
});

// recursive
test('0! = 1', () => {
    expect(Algorithm.Factorial(0, 2)).toBe(1);
});

test('1! = 1', () => {
    expect(Algorithm.Factorial(1, 2)).toBe(1);
});

test('4! = 24', () => {
    expect(Algorithm.Factorial(4, 2)).toBe(24);
});

test('50! = 3.0414093201713376e+64', () => {
    expect(Algorithm.Factorial(50, 2)).toBe(3.0414093201713376e+64);
});