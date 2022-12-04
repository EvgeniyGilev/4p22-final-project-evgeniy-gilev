import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Api from '../../API/Api';
import Button from '../../Components/Common/Button/Button';
import Counter from '../../Components/Common/Counter/Counter';
import { addToBasket } from '../../Store/Slices/BasketSlice';
import { addBasketTotal } from '../../Store/Slices/CartSlice';
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
    <main className="product">
      <h4 className="product__title">{product.title}</h4>
      <div className="product-container">
        <div className="product-container__item">
          <div className="product-left-img-container">
            <img
              className="product-container__img"
              src={product.image}
              alt=""
            ></img>
          </div>
        </div>
        <div className="product__item product-container-description">
          <p className="product-container-description__description">
            {product.description}
          </p>
        </div>
        <div className="product__item">
          <div className="product-container__price">
            {typeof product.price === 'number' &&
              Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2 }).format(
                product.price
              ) + ' Руб.'}
          </div>
          <div className="card-button-container">
            {!products[productId] && (
              <Button
                diabled="false"
                type="AddCardButton"
                onClick={() => {
                  dispatch(addToBasket(productId));
                  dispatch(addBasketTotal(product.price));
                }}
              >
                Добавить
              </Button>
            )}
            {products[productId] && (
              <Counter
                productId={productId}
                priceItem={product.price}
              ></Counter>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
