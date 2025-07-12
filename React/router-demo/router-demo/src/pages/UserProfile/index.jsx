import {
  useEffect
} from 'react'
import {
  useParams
} from 'react-router-dom'
const Userprofile = () => {
  const { id } = useParams();
  useEffect(() => {
    // const id =
    console.log('UserProfile mounted');
  }, [id])
  return (
    <>
      <h1>用户资料</h1>
      <p>用户ID: {id}</p>
    </>
  )
}

export default Userprofile;
