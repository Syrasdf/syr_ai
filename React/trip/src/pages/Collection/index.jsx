import {
  useImageStore
} from '@/store/useImageStore'
import {
  useEffect
} from 'react'
import Waterfall from '@/components/Waterfall'
const Collection = () => {
  const {loading , images, fetchMore } = useEffect
  useEffect(() => {
    fetchMore()
  },[])
  return (
    <>
      <Waterfall images={images} fetchMore/>
    </>
  )
}

export default Collection
