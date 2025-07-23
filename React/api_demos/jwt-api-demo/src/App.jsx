import {
  useState,
  useEffect
} from 'react'
import './App.css'
import {
  getTodos,
  getRepos
} from '@/api';

function App() {
  const [repos, setRepos] = useState([]);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // const todosResult = await getTodos();
      // console.log(todosResult);
      // setTodos(todosResult.data.);
      const reposResult = await getRepos();
      setRepos(reposResult.data.data);
      console.log(reposResult.data.data);
    }
    fetchData();
  }, [])
  return (
    <>
      {
        todos.map(todo => (
          <div key={todo.id}>
            {todo.title}
          </div>
        ))
      }
      {
        repos.map(repo => (
          <div key={repo.id}>
            {repo.title}
            {repo.description}
          </div>
        ))
      }
    </>
  )
}
export default App
