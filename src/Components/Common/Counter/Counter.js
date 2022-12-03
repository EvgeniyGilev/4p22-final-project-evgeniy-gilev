import './Counter.css';
import React, { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToBasket,
  removeFromBasket,
} from '../../../Store/Slices/BasketSlice';

function Counter(props) {
  const products = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const decrementCart = () => {
    dispatch(removeFromBasket(props.productid));
  };

  const incrementCart = () => {
    dispatch(addToBasket(props.productid));
  };

  return (
    <div className="counter">
      <Button className="counter-button" onClick={decrementCart}>
        -
      </Button>
      <div className="counter-value">{products[props.productid]}</div>
      <Button className="counter-button" onClick={incrementCart}>
        +
      </Button>
    </div>
  );
}

export default Counter;
