function memoizeFibonacci(n, memo = {}) {
    if (n < 3) return 1;
    if (n in memo) return memo[n];
  
    memo[n] = memoizeFibonacci(n - 1, memo) + memoizeFibonacci(n - 2, memo);
  
    return memo[n];
  }
  let a = 15;
  console.log('Memoize Fibonacci: ', memoizeFibonacci(a));