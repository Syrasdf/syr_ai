import { useState } from 'react';
function TodoForm(props) {
  const onAdd = props.onAdd
  // const [text, setText] = useState(''); // 初始值为空字符串
  const handleSubmit = (e) => {
    // 阻止表单默认提交行为
    e.preventDefault(); // event api
    //console.log(text);
    onAdd(text)
    // todos? 打报告
  };

  const handleChange = (e) => { // 事件对象 event object
    // 处理输入框的值改变事件
    setText(e.target.value); // 把输入框的值赋值给text
    
  };

  return (
    <form action ="http://www.baidu.com" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="请输入待办事项"
        value={text} 
        onChange={handleChange}
      />
      {/* 将按钮移到表单内部 */}
      <button type="submit">Add</button> 
    </form>
  );
}

export default TodoForm;