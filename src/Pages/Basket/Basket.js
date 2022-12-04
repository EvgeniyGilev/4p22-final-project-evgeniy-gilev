import { useSelector } from 'react-redux';
import ItemCart from './ItemCart/ItemCart';
import './Basket.css';
import Button from '../../Components/Common/Button/Button';

export default function BasketPage() {
  const products = useSelector((state) => state.basket);
  const allDataCart = useSelector((state) => state.cart);
  const allproducts = allDataCart.products;

  let viewproducts = allproducts.filter((x) =>
    Object.keys(products).includes(String(x.id))
  );

  const ShowOrder = () => {
    console.log('Ваш заказ: ');
    for (let val of viewproducts) {
      console.log(
        `ID:${val.id}, Наименование: ${val.title}, Цена: ${
          val.price
        }, Кол-во: ${products[val.id]}, Общая сумма: ${
          val.price * products[val.id]
        }`
      );
    }
    console.log('Итого: ' + allDataCart.basketTotal);
  };

  return (
    <div className="cart-container-main">
      <h1>Ваши покупки:</h1>
      <div className="cart">
        <div className="cart-item-block"></div>
        {viewproducts.length !== 0 ? (
          viewproducts.map((item, index) => {
            return (
              <ItemCart
                key={index}
                title={item.title}
                description={item.description}
                id={item.id}
                img={item.image}
                price={item.price}
              />
            );
          })
        ) : (
          <h1>Ваша корзина пуста...</h1>
        )}
        <div className="cart-manage-block"></div>
      </div>
      <div className="basket-total-container">
        <div>
          <h1>Итого: </h1>
        </div>
        <div className="basket-total-itogo">
          {Intl.NumberFormat('ru-RU', {
            minimumFractionDigits: 2,
          }).format(allDataCart.basketTotal) + ' Руб.'}
        </div>
        <div>
          <Button
            diabled="false"
            className="basket-total-itogo__button"
            onClick={ShowOrder}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
}
