import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar__horizontal-menu-list horizontal-menu-list">
        <li className="horizontal-menu-list__item">
          <Link to={'/'}>Все товары</Link>
        </li>
        <li className="horizontal-menu-list__item">
          <Link to={'basket'}>Корзина</Link>
        </li>
        <li className="horizontal-menu-list__item">
          <Link to={'contacts'}>Контакты</Link>
        </li>
        <li className="horizontal-menu-list__item">
          <a href="">Вход/Регистрация</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
