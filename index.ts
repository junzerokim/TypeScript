function changeNumber(n: (number | string)[]) {
  let result: number[] = [];
  n.map((a) => {
    if (typeof a === 'string') {
      result.push(Number(a));
    } else {
      result.push(a);
    }
  });
  return result;
}

console.log(changeNumber(['1', 2, '3']));
