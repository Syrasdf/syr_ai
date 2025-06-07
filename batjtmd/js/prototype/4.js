function Person(name, age) {
  // this 指向当前实例化的对象
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() { // 原型对象  类的原型对象
     console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.'); // this 指向实例对象
}

var hu = new Person('John', 18); // new 一下 实例化对象 new 运行一个构造函数
console.log(hu.__proto__); // 原型对象
var a = {
  name:'kz',
  eee:'鹅',
  country:'China'
}
hu.__proto__ = a; 
console.log(hu.__proto__); // 原型对象
console.log(hu.country); // 原型对象  类的原型对象
console.log(Person.prototype);
console.log(Person.prototype.constructor == Person);
console.log(hu.eee, hu.name);



