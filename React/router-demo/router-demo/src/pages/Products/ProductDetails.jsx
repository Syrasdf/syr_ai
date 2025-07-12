import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productID } = useParams();

  return (
    <>
      <h1>产品详情</h1>
      <p>产品ID: {productID}</p>
    </>
  )
}
export default ProductDetails;
