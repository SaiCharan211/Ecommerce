import { Link } from 'react-router-dom';
import Products from '../../products';
import './index.css'

function ProductList ()  { 
  return (
    <div className='products-list-container'>
      <h2 className='products-list-heading'>Product List</h2>
      <div className='products-list'>
      {Products.map((item) => (
        <Link className='product-details-link' to={`/product/${item.id}`}>
          <div className='product' key={item.id}>
          <img className='product-image' src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p className='description'>Price: {item.price} rs</p>
          <p className='description'>Quantity:{item.Quatity}</p>
          </div></Link>
      ))}
      </div>
    </div>
  );
};

export default ProductList;

