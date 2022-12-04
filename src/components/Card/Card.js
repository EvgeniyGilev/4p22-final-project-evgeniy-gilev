import './Card.css';
import Button from '../Common/Button/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../../Store/Slices/BasketSlice';
import Counter from '../Common/Counter/Counter';
import { addBasketTotal } from '../../Store/Slices/CartSlice';

function Card(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.basket);

  return (
    <div className="card">
      <Link to={`products/${props.id}`}>
        <div className="card-content">
          <div className="card-content__image">
            <img className="card-img" src={props.img} alt=""></img>
          </div>
          <div className="card-decription-container">
            <h4 className="card-title">{props.title}</h4>
          </div>
        </div>
      </Link>
      <div className="card-price">
        {Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2 }).format(
          props.price
        ) + ' Руб.'}
      </div>
      <div className="card-button-container">
        {!products[props.id] && (
          <Button
            diabled="false"
            type="AddCardButton"
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
    </div>
  );
}

export default Card;
