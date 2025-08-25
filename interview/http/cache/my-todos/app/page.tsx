"use client";
import {
  useEffect, useState
} from "react";
import {
  type Todo
} from '../types/todo'

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
  }

  const addTodos = async () => {
    if (!input) return;
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title: input }),
    });
    const data = await res.json();
    setTodos([...todos, data]);
    setInput("");
  }

  const toggleTodo = async (id: number) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, completed: !todos.find(todo => todo.id === id)?.completed }),
    });
    const data = await res.json();
    setTodos(todos.map(todo => todo.id === id ? data : todo));
  }

  const deleteTodo = async (id: number) => {
    await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add todo..."
          className="border p-2 rounded flex-1"
          type="text"
        />
        <button
          onClick={addTodos}
          className="bg-blue-500 text-white px-4 py-2 
          rounded hover:bg-blue-600">
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 border rounded"
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
            >
              {todo.title}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}