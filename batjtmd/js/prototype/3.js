// 没有 class 的 js 如何在苦苦追求 OOP
// 首字母大写 约定 类的概念
// 2. 构造函数
function Person(name, age) {
    // this 指向当前实例化的对象
    this.name = name;
    this.age = age;
}
// 函数对象 原型对象
// 类的方法
Person.prototype = { // 原型对象  类的原型对象
    sayHello: function () { // 方法
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.'); // this 指向实例对象
    }
}

// new 一下 实例化对象
// new 运行一个构造函数
let hu = new Person('John', 18); 
// 原型对象
hu.sayHello()
let o = {a:1};
console.log(hu.__proto__.__proto__);
console.log(o.__proto__);
console.log(o.toString); // 函数对象



