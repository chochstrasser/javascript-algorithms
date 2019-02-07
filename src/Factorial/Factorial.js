export default {
  factorial(n) {
    console.log('Start: ' + n + ' factorial');
    let res;

    // basic
    if (isNaN(n) || n < 0)
      res = 'Please only use a positive integers, which must be greater than or equal to zero.'
    else if (n > -1 && n < 2)
      res = 1;
    else {
      for (var i=n; i>1; i--)
        n *= (i-1);
      res = n;
    }

    // advanced
    

    console.log('Result: ' + res);
    return res;
  }
};