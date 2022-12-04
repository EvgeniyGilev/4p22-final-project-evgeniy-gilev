import './ItemCart.css';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../Components/Common/Button/Button';
import Counter from '../../../Components/Common/Counter/Counter';
import { addToBasket } from '../../../Store/Slices/BasketSlice';
import { addBasketTotal } from '../../../Store/Slices/CartSlice';

export default function ItemCart(props) {
  const dispatch = useDispatch;
  const products = useSelector((state) => state.basket);

  return (
    <div className="item-cart-container">
      <div className="item-cart-content-image">
        <img className="item-cart-img" src={props.img} alt=""></img>
      </div>
      <div className="item-cart-decription-container">
        <h4 className="item-cart-title">{props.title}</h4>
      </div>
      <div className="item-cart-price">
        {Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2 }).format(
          props.price
        ) + ' Руб.'}
      </div>
      <div className="item-cart-count">
        {!products[props.id] && (
          <Button
            diabled="false"
            className="item-cart-button"
            onClick={() => {
              dispatch(addToBasket(props.id));
              dispatch(addBasketTotal(props.price));
            }}
          >
            Добавить
          </Button>
        )}
        {products[props.id] && (
          <Counter productId={props.id} priceItem={props.price}></Counter>
        )}
      </div>
      <div className="item-cart-price">
        {Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2 }).format(
          props.price * products[props.id]
        ) + ' Руб.'}
      </div>
    </div>
  );
}
