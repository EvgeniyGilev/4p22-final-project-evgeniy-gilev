import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconCart } from '../../../Images/IconSVG/IconCart';
import './Navbar.css';

function Navbar() {
  const count = useSelector((state) => state.counter.value);
  const basket = useSelector((state) => state.basket);
  //console.log(state.counter);
  return (
    <div className="navbar">
      <ul className="navbar__horizontal-menu-list horizontal-menu-list">
        <li className="horizontal-menu-list__item">
          <Link to={'/'}>Все товары</Link>
        </li>
        <li className="horizontal-menu-list__item">
          <Link to={'contacts'}>Контакты</Link>
        </li>
        <li className="horizontal-menu-list__item">
          <Link to={'basket'}>Корзина</Link>
        </li>

        <li className="horizontal-menu-list__item">
          <Link to={'basket'}>
            <IconCart />
            {Object.keys(basket).length > 0 && (
              <div className="horizontal-menu-list__cart-items">
                {Object.values(basket).reduce((acc, item) => {
                  acc += item;
                  return acc;
                }, 0)}
              </div>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
