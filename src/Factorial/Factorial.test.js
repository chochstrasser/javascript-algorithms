import Alg from './Factorial'

test('0! = 1', () => {
    expect(Alg.factorial(0)).toBe(1);
});

test('1! = 1', () => {
    expect(Alg.factorial(1)).toBe(1);
});

test('4! = 24', () => {
    expect(Alg.factorial(4)).toBe(24);
});