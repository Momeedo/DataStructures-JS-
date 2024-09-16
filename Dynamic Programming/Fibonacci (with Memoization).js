function memoizeFibonacci(n, memo = {}) {
  if (n < 3) return 1;
  if (n in memo) return memo[n];

  memo[n] = memoizeFibonacci(n - 1, memo) + memoizeFibonacci(n - 2, memo);

  return memo[n];
}
let a = 15;
console.log("Memoize Fibonacci: ", memoizeFibonacci(a));

function fibonacciBottomUp(n) {
  let fibArray = [];
  fibArray[0] = 0;
  fibArray[1] = 1;

  for (let index = 2; index <= n; index++) {
    fibArray[index] = fibArray[index - 1] + fibArray[index - 2];
  }

  return fibArray[n];
}
