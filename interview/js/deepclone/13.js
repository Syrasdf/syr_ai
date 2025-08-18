// 高级深拷贝
const target = {
  field1: 1,
  field2: undefined,
  field3: 'hxt',
  field4: {
      child: 'child',
      child2: {
          child2: 'child2'
      }
  }
}

// console.log(JSON.parse(JSON.stringify(target)));


// 递归 + 
function clone(source) {
  if(typeof source == 'object') {
    let cloneTarget = {}; // 分配新空间
    for(const key in source) {
      cloneTarget[key] = clone(source[key]);
    }
    return cloneTarget;
  } else {
    return source;
  }
}
let obj = clone(target);
obj.field4.child = 'newChild';
console.log(obj,target);







