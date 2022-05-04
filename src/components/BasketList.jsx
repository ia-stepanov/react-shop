import { BasketItem } from './BasketItem';

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity,
    decQuantity,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active blue darken-1">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
            {...item}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active blue darken-1">Общая стоимость: {totalPrice} ₽ </li>
      <li className="collection-item center">
        <button className="btn blue accent-4">Оформить заказ</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        clear
      </i>
    </ul>
  );
}

export { BasketList };
