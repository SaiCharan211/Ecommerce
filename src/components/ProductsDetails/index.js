import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../../products';
import './index.css'

const ProductDetails = () => {
  const { id } = useParams();
  const product = Products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  function handleAddToCart () {
    alert('Added to cart!');
  };

  return (
    <div className='products-details-main-container'>
        <h2 className='product-detail-heading'>Product Details</h2>
        <div className='product-container'>
            <img className='product-image' src={product.image} alt={product.name} />
            <div className='product-detail-desc-container'>
                <h3 className='product-detail-name'>{product.name}</h3>
                <p className='para'>Price: {product.price} rs</p>
                <p className='para'>Quantity: {product.quantity}</p>
                <button className='add-to-cart-button' onClick={handleAddToCart}>Add to Cart</button>
            </div>
    </div>
    </div>
  );
};

export default ProductDetails;