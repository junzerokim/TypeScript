function changeNumber(n) {
  var result = [];
  n.map(function (a) {
    if (typeof a === 'string') {
      result.push(Number(a));
    } else {
      result.push(a);
    }
  });
  return result;
}
console.log(changeNumber(['1', 2, '3']));
