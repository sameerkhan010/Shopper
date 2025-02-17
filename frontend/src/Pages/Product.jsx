import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDispaly from '../Components/ProductDisplay/ProductDispaly';
import DescripitionBox from '../Components/DescriptionBox/DescripitionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} =useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDispaly product={product}/>
      <DescripitionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product;
