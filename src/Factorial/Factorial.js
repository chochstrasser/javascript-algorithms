export default function (n) {
  let res1 = factorialBasic(n);
  return res1;
}

var factorialBasic = (n) => {
  let res = 0;
  if (isNaN(n) || n < 0)
    res = 'Please only use a positive integers, which must be greater than or equal to zero.'
  else if (n > -1 && n < 2)
    res = 1;
  else {
    for (var i=n; i>1; i--)
        n *= (i-1);
    res = n;
  }
  return res;
};

var factorialRecursion = (n) => {
  let res;
  if (isNaN(n) || n < 0)
    res = 'Please only use a positive integers, which must be greater than or equal to zero.'
  else if (n >= 0)
    res = n * factorial(n-1);
  else
    return 1;
  return res;
};