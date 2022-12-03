import './Card.css';
import Button from '../Common/Button/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../Store/Slices/BasketSlice';
import Counter from '../Common/Counter/Counter';

function Card(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.basket);

  return (
    <div className="Card">
      <Link to={`products/${props.id}`}>
        <div className="Card-content">
          <img className="Card-img" src={props.img} alt=""></img>
          <div className="Card-decription-container">
            <h4 className="Card-title">{props.title}</h4>
          </div>
        </div>
      </Link>
      <div className=""></div>
      <div className="Card-price">
        {Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2 }).format(
          props.price
        )}
        {' руб.'}
      </div>
      <div className="Card-button-container">
        {!products[props.id] && (
          <Button
            diabled="false"
            type="AddCardButton"
            onClick={() => dispatch(addToBasket(props.id))}
          >
            Добавить
          </Button>
        )}
        {products[props.id] && <Counter productid={props.id}></Counter>}
      </div>
    </div>
  );
}

export default Card;
