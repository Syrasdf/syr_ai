
//声明了对象常量
//  在内存中开辟了一块空间，存储了一个对象的引用地址，
//  hxt 取了一个地址 & 变量名是地址的标记
//  js是一个弱类型语言，变量类型由值决定          c++是一个强类型语言，
//  = 赋值 Object
//  对象自变量(对象声明方式) JSON
//  JS 太灵活，不需要new，通过{}拿到对象  [] 拿到数组
const hxt = {

  name: '小黄',
  age: 20,
  tall: 187,
  hometown: '山东',
  isSingls: true,
};

const pyc = {

  name: '小彭', // key value   String
  age: 20,//Number  数值类型
  tall: 187,
  hometown: '新余',
  isSingls: true,// Boolean  布尔类型
  //形参
  sendFlower: function (girl) {// function  函数类型
    console.log(pyc.name + '给' + xm.name + '99朵玫瑰')
    girl.receiveFlower(pyc)
  }
};

const xm = {
  xq:30,//心情 
  name: '小美',
  rome:'408',
  receiveFlower : function (sender) {
      console.log(xm.name + '收到了' + sender.name + '的99朵玫瑰')
      if(xm.xq>90){
        console.log('硕果走一波')
      }else{
        console.log('gun ~~~~')
      }
  }
  
}
//帮彭老板的 小美的闺蜜
const xh = {
  xq:30,//心情
  name: '小红',
  rome:'408',
  hometown: '新余',//老乡
  // 送小美，送小红，都具有receiveFlower方法
  // 对象互换
  // 接口 interface
  receiveFlower : function (sender) {
      // if (sender.name === '彭奕淳') {
      //     console.log(xh.name+':让我们在一起吧')
      //     return
      // }
      //console.log(xh.name + '收到了' + sender.name + '的99朵玫瑰')
      setTimeout(() => {//定时器
        xm.xq = 99;
        xm.receiveFlower(sender)
    },3000)
    //xm.receiveFlower(sender)
  } // 添加了闭合的 }
}
//提升部分：让他变复杂,处理对象的关系
//以脱口秀方式讲解js
pyc.sendFlower(xh)
















