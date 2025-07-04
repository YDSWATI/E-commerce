import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';
const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  if (!all_products || all_products.length === 0) {
    return <div>Loading...</div>;
  }
  const product = all_products.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
        
      <Breadcrum product = {product} />
      <ProductDisplay product = {product}/>
      <DescriptionBox/>
      <RelatedProduct></RelatedProduct>
    </div>
  );
};

export default Product;
