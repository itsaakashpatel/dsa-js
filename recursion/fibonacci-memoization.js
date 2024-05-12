//Implement fibonacci sequence using memoization

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let cache = {};

  let fibonacci = function (num) {
    if (num < 2) {
      return num;
    }

    if (cache[num]) {
      return cache[num];
    } else {
      let result = fibonacci(num - 1) + fibonacci(num - 2);
      cache[num] = result;
      return result;
    }
  };

  return fibonacci(n);
};

console.log(fib(4));
