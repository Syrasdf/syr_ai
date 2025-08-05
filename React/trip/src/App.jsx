// import { useState } from 'react'
// import {
//   Search
// }from 'react-vant'
import './App.css'
import {
  Suspense,
  lazy
} from 'react'
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import MainLayout from '@/components/MainLayout'
import BlankLayout from '@/components/BlankLayout'
import Loading from '@/components/Loading'
import Toast from '@/components/Toast'

const Home = lazy(() => import('@/pages/Home'))
const Discount = lazy(() => import('@/pages/Discount'))
const Collection = lazy(() => import('@/pages/Collection'))
const Trip = lazy(() => import('@/pages/Trip'))
const Account = lazy(() => import('@/pages/Account'))
const Login = lazy(() => import('@/pages/Login'))
const Search = lazy(() => import('@/pages/Search'))
const Detail = lazy(() => import('@/pages/Detail'))
const Coze = lazy(() => import('./pages/Coze/index.jsx'));
function App() {
  return (
    <>
      {/* <Button type="primary">Primary</Button>
     <Button type="danger">Danger</Button>
     <Button disabled type="danger">Danger</Button>
     <Button loading loading-text="加载中..." type="info">加载中</Button>
     <Search
       readOnly
       placeholder="请输入搜索内容"
     /> */}
      <Suspense fallback={<div>loading...</div>}>
        {/* 带有tabbar 的Layout */}
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/discount" element={<Discount />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/trip" element={<Trip />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
          </Route>
          {/* 空的Layout */}
          <Route path="/coze" element={<Coze />}/>
          <Route element={<BlankLayout />}>
            <Route path="/search" element={<Search />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </Suspense>
      <Toast />
    </>
  );
}

export default App;
