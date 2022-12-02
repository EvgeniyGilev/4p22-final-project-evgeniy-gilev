import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Counter from '../../Components/Counter/Counter';
import './Product.css';

export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const result = await response.json();
      setProduct(result);
    })();
  }, []);

  return (
    <div className="product">
      <h4 className="product__title">{product.title}</h4>
      <div className="product-container">
        <div className="product-left">
          <img
            className="product-container__img"
            src={product.image}
            alt=""
          ></img>
        </div>
        <div className="product-center product-container-description">
          <p className="product-container-description__description">
            {product.description}
          </p>
        </div>
        <div className="product-right">
          <div className="product-container__price">
            {' '}
            {Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2 }).format(
              product.price
            )}
            {' руб.'}
          </div>
          <Counter></Counter>
        </div>
      </div>
    </div>
  );
}
