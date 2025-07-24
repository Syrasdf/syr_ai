import {
  useEffect,
  lazy,
  Suspense
} from 'react'
import './App.css'
import {
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
const Home = lazy(() => import('./view/Home'))
const Pay = lazy(() => import('./view/Pay'));
const Login = lazy(() => import('./view/Login'));
const RequiredAuth = lazy(() => import('./components/RequiredAuth'));

function App() {

  return (
    <>
      <Navbar />
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pay' element={
            <RequiredAuth>
              <Pay />
            </RequiredAuth>
          } />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
