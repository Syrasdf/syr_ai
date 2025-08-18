# 响应式底层原理


- DOM Api -> 响应式业务
- Object.defineProperty(obj,"value",{
  get,
  set
})
  对象上的某一个属性的某些行为 （get，set）进行定义，在完成本来的职责的同时，去做dom更新，
  这就是响应式
  拦截行为
- 缺点呢？ 有点麻烦，每次只能定义一个属性
- obj.value
- REACT,VUE现代前端MVVM 框架，早期用Object.defineProperty
  实现响应式，现在
