import {
  useState,
  Suspense,
  lazy // 懒加载
} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Navigation from './components/Navigation'
// 函数  路由 -> Route 
// 懒加载
// lazy 返回一个新组件
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const NotFound = lazy(() => import('./pages/NotFound'))
import ProtectRoute from './pages/ProtectRoute'
import Pay from './pages/Pay'
import Login from './pages/Login'

// import Home from './pages/Home/index.jsx'
// import About from './pages/About/index.jsx'
// // 30几个页面
function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* 鉴权 */}
            <Route path="/pay" element={
              <ProtectRoute>
                {/* <Pay /> */}
                <div>123</div>
                <div>456</div>
              </ProtectRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router >
    </>
  )
}

export default App
