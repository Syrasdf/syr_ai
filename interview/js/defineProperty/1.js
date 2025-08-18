// Object.defineProperty
var obj = {}; // 对象
// es5 就提供的api兼容性更好
// react 和 vue 最新版 对浏览器有要求
Object.defineProperty(obj,"num",{
    value:1,
    // 属性描述符 用于控制该属性是否可以被修改或删除
    configurable:true,
    // 是否能修改属性值
    writable:true,
    // 是否能被枚举
    enumerable:false,
    // get:function(){
    //     console.log("读取了num属性");
    //     return 1;
    // },
    set:function(newValue){
        console.log("设置了num属性");
    }
})
// obj.num = 2;
// console.log(obj.num);
// delete obj.num;
// console.log(obj);

for(let key in obj){
    console.log(key + ':' + obj[key]);
}

console.log(Object.getOwnPropertyDescriptor(obj,"num"));
Object.defineProperty(obj,"num",{
    writable:true,
})
obj.num = 2;
console.log(Object.getOwnPropertyDescriptor(obj,"num"));

for(let key in obj){
    console.log(key + ':' + obj[key]);
}







