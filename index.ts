type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  return x.replace(/^0+/, '');
};

function removeDash(x: string): number {
  return Number(x.replace(/-/g, ''));
}

type func1 = (a: string) => string;
type func2 = (a: string) => number;

function answer(a: string, b: func1, c: func2) {
  let firstCalc = b(a);
  let result = c(firstCalc);
  return result;
}

console.log(answer('010-1234-5678', cutZero, removeDash));
