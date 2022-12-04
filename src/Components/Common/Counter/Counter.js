import './Counter.css';
import React from 'react';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToBasket,
  removeFromBasket,
} from '../../../Store/Slices/BasketSlice';
import {
  addBasketTotal,
  removeBasketTotal,
} from '../../../Store/Slices/CartSlice';

function Counter(props) {
  const products = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const decrementCart = () => {
    dispatch(removeFromBasket(props.productId));
    dispatch(removeBasketTotal(props.priceItem));
  };

  const incrementCart = () => {
    dispatch(addToBasket(props.productId));
    dispatch(addBasketTotal(props.priceItem));
  };

  return (
    <div className="counter">
      <Button className="counter-button" onClick={decrementCart}>
        -
      </Button>
      <div className="counter-value">{products[props.productId]}</div>
      <Button className="counter-button" onClick={incrementCart}>
        +
      </Button>
    </div>
  );
}

export default Counter;
