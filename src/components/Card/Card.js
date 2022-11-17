import './Card.css';

import Button from './Common/Button/Button';

function Card() {
  return (
    <div className="Сard">
      <img
        className="Сard-img"
        src="http://img02.taobaocdn.com/bao/uploaded/i2/17484027867393951/T1D.u2FXVXXXXXXXXX_!!2-item_pic.png"
        alt=""
      ></img>
      <h2 className="Card-title">Заголовок</h2>
      <p className="Card-description">lorem ipsum</p>
      <div className="Card-price">5050р.</div>
      <Button text="Купить" />
    </div>
  );
}

export default Card;
