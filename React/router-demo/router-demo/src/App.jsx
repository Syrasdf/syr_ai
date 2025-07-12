import {
  BrowserRouter as Router,/// 前端路由
  Routes,// 路由设置容器
  Route,  // 单条路由
  Link    // 导航链接
} from 'react-router-dom'
import { useState } from 'react'

import './App.css'
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Products from './pages/Products';
import ProductDetails from './pages/Products/ProductDetails';
import NewProduct from './pages/Products/NewProduct';

function App() {
  return (
    <>
      {/* 前端路由接管一切，配置 */}
      <Router>
        {/* 导航菜单 */}
        <nav style={{ padding: '20px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>首页</Link>
          <Link to="/products" style={{ marginRight: '15px' }}>产品列表</Link>
          <Link to="/products/new" style={{ marginRight: '15px' }}>新增产品</Link>
          <Link to="/products/123" style={{ marginRight: '15px' }}>产品详情</Link>
          <Link to="/user/456" style={{ marginRight: '15px' }}>用户资料</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/products" element={<Products />} />
          {/* 二级路由 */}
          <Route path="/products/:productID" element={<ProductDetails />} />
          <Route path="/products/new" element={<NewProduct />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
