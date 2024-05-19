// import BinarySearch from "./search/binary";

// import findPosition from "./search/binary/findPosition";
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  if (n % 2 === 0) {
    let halfPower = myPow(x, n / 2);
    return halfPower * halfPower;
  } else {
    return x * myPow(x, n - 1);
  }
};

console.log(myPow(2.0, 10));
