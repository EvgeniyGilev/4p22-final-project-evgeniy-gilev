import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconCart } from '../../../Images/IconSVG/IconCart';
import './Navbar.css';

function Navbar() {
  const basketTotal = useSelector((state) => state.cart.basketTotal);
  const basket = useSelector((state) => state.basket);
  return (
    <div className="navbar">
      <ul className="navbar__horizontal-menu-list horizontal-menu-list">
        <li className="horizontal-menu-list__item">
          <Link to={'/'}>Все товары</Link>
        </li>
        <li className="horizontal-menu-list__item">
          <Link to={'contacts'}>Обратная связь</Link>
        </li>
        <li className="horizontal-menu-list__item">
          <Link to={'basket'}>Корзина</Link>
        </li>
        <li className="horizontal-menu-list__item">
          <Link to={'basket'}>
            <div className="cart-with-icon">
              <IconCart />
              {Object.keys(basket).length > 0 && (
                <div className="horizontal-menu-list__cart-items">
                  {Object.values(basket).reduce((acc, item) => {
                    acc += item;
                    return acc;
                  }, 0)}
                </div>
              )}
            </div>
          </Link>
        </li>
        <li className="horizontal-menu-list__item">
          <Link to={'basket'}>
            <div className="horizontal-menu-list-total-container">
              <div className="horizontal-menu-list-total-basket-total">
                {Intl.NumberFormat('ru-RU', {
                  minimumFractionDigits: 2,
                }).format(basketTotal) + ' Руб'}
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
