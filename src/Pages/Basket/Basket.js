import { useDispatch, useSelector } from 'react-redux';
import Card from '../../Components/Card/Card';

export default function BasketPage() {
  const dispatch = useDispatch;
  const products = useSelector((state) => state.basket);
  const allDataCart = useSelector((state) => state.cart);
  const allproducts = allDataCart.products;
  /*
  const decrementCart = () => {
    dispatch(removeFromBasket(id));
  };

  const incrementCart = () => {
    dispatch(addToBasket(id));
  };
*/

  let viewproducts = allproducts.filter((x) =>
    Object.keys(products).includes(String(x.id))
  );

  console.log(Object.keys(products));
  console.log(viewproducts);

  //const addedProduct = state.products.find((product) => product.id === payload);
  //state.cartProducts.push(addedProduct);

  return (
    <>
      <h1>Корзина</h1>
      <div className="cart">
        <div className="cart-item-block"></div>
        {viewproducts.length !== 0 ? (
          viewproducts.map((item, index) => {
            return (
              <Card
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
    </>
  );
}
