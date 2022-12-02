import './Card.css';
import Button from '../Common/Button/Button';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';

function Card(props) {
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
      <Counter></Counter>
      <div className="Card-button-container">
        <Button diabled="false" type="AddCardButton">
          Добавить
        </Button>
      </div>
    </div>
  );
}

export default Card;
