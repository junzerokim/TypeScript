var cutZero = function (x) {
  return x.replace(/^0+/, '');
};
function removeDash(x) {
  return Number(x.replace(/-/g, ''));
}
function answer(a, b, c) {
  var firstCalc = b(a);
  var result = c(firstCalc);
  return result;
}
console.log(answer('010-9747-9738', cutZero, removeDash));
