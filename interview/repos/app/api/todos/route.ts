import {
  NextResponse // 定义res如何定义返回数据
} from "next/server"; // api server 路由
import { type Todo } from "@/app/types/todo";

let todos: Todo[] = [
  {
    id: 1,
    title: "去广州",
    completed: false,
  },
  {
    id: 2,
    title: "去深圳",
    completed: false,
  },
];
// Restful 一切皆资源
// 向用户暴露资源的
// method + 资源URL定义规则
export async function GET(request: Request) {
  return NextResponse.json(todos);
}



export async function POST(request: Request) {
  // 获取请求体 body json
  const data = await request.json();
  const newTodo: Todo = {
    id: todos.length + 1,
    title: data.title,
    // typescript 除了强类型外，代码提示更好，写起来更快
    completed: false,
  };
  todos.push(newTodo);
  return NextResponse.json(newTodo);
}

export async function PUT(request: Request) {
  const data = await request.json();
  todos = todos.map(todo => {
    return todo.id === data.id ? { ...todo, completed: data.completed } : todo;
  });
  return NextResponse.json(todos);
}

export async function DELETE(request: Request) {
  const data = await request.json();
  todos = todos.filter(todo => todo.id !== data.id);
  return NextResponse.json(todos);
}