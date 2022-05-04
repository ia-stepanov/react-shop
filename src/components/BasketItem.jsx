function BasketItem(props) {
  const { id, name, price, quantity, removeFromBasket = Function.protype } = props;

  return (
    <li className="collection-item">
      {name} x{quantity} = {price * quantity} ₽
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons black-text basket-delete">clear</i>
      </span>
    </li>
  );
}

export { BasketItem };
