import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Api from '../../API/Api';
import Button from '../../Components/Common/Button/Button';
import Counter from '../../Components/Common/Counter/Counter';
import { addToBasket } from '../../Store/Slices/BasketSlice';
import './Product.css';

export default function ProductPage() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const products = useSelector((state) => state.basket);

  useEffect(() => {
    setIsLoading(true);
    Api.fetchProduct(productId).then((result) => {
      setProduct(result);
    });
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <h1>Загрузка...</h1>
  ) : (
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
            {typeof product.price === 'number' &&
              Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2 }).format(
                product.price
              ) + ' руб.'}
          </div>
          <div className="Card-button-container">
            {!products[productId] && (
              <Button
                diabled="false"
                type="AddCardButton"
                onClick={() => dispatch(addToBasket(productId))}
              >
                Добавить
              </Button>
            )}
            {products[productId] && <Counter productid={productId}></Counter>}
          </div>
        </div>
      </div>
    </div>
  );
}
