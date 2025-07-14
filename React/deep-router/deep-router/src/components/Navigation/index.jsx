import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  )
}
// 向外输出
export default Navigation