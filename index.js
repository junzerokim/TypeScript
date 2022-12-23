var Person = /** @class */ (function () {
  function Person(a) {
    this.name = a;
  }
  return Person;
})();
var a = new Person('hello');
console.log(typeof a.name);
