# JSX 考点
- 何为 JSX 
  JS in XML（HTML是XML的一种形式）
  react 推崇的 Javascript语法拓展，允许在Javascript中
  嵌入HTML结构(function return JSX 结构)
  常用于React组件的定义，使得UI结构更直观易读。
  React 的一大优点特性。

- JSX可以直接运行吗？
  不可以
- .styl -> stulus 编译 -> .css  
<ul>
  <li key={todo.id}>{title}</li>
  <li key={todo.id}>{title}</li>
  ...
</ul>
- JSX -> React.createElement(tag,props,children)
      ->document.createElement('ul')

  语法编译转译

  