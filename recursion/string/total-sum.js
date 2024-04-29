function totalSum(target, partition) {
  const output = [];

  combinations("", target);

  function combinations(str, target) {
    if (target === 0) {
      output.push(str);
    }

    for (let i = 0; i < partition; i++) {
      combinations(str + i, target);
    }
  }
}

console.log(totalSum(4, 2));
