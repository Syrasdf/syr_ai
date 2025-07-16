import {
  useReducer
} from 'react';
import todoReducer from '../reducer/todoReducer';

// es6 参数的默认值
// {todos,} key:value 省略
// '' 模板字符串
// ...解构 对象解构 [] = [] {} = {}
// 展开运算符，... rest 运算符
export function useTodos(initial = []) {
  const [todos, dispatch] = useReducer(todoReducer, initial);

  const addTodo = (text) => {
    dispatch({
      type: 'ADD_TODO',
      text,
    })
  }
  const removeTodo = (id) => {
    dispatch({
      type: 'REMOVE_TODO',
      id,
    })
  }
  const toggleTodo = (id) => {
    dispatch({
      type: 'TOGGLE_TODO',
      id,
    })
  }

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
  }
}

export default useTodos