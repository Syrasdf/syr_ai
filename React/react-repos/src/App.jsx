import {
  useState,
  useEffect,
  Suspense,
  lazy
} from 'react'
import {
  // BrowserRouter as Router,

  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Loading from './components/Loading.jsx'
// 声明懒加载
import RepoList from './pages/RepoList'

function App() {

  // 路由懒加载
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route path="/users/:id/repos" element={<RepoList />} />
        <Route path="*" element={<Navigate to="/users/shunwuyu/repos" />} />
      </Routes>
    </Suspense>
  )
}

export default App

// BrowserRouter as Router,
// 在main引入，包着APP.jsx
// <Router>
//   <App />
// </Router>
