class Person<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}

let a = new Person<string>('hello');
console.log(typeof a.name);
