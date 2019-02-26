// import Alg from './Factorial'
import * as Algorithm from '../Algorithm';

test('0! = 1', () => {
    let array = [0,0,1,1,1,0,0];
    let row = 0;
    let column = 2;
    expect(Algorithm.FloodFill(array, row, column)).toBe(3);
});
