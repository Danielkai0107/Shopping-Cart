import React, { useContext } from 'react';
import { AppContext } from '../../func/context';

const CartItem = ({ item }) => {
  const { showProduct, increaseCart, decreaseCart, removeCartItem } =
    useContext(AppContext);

  return (
    <article className="cartItem">
      <section className="cartItem__img">
        <img src={item.image} alt={item.title} />
      </section>
      <section className="cartItem__info">
        <ul className="cartItem__info__title">
          <h3 onClick={showProduct(item.id)}>{item.title}</h3>
          <span onClick={removeCartItem(item.id)}></span>
        </ul>
        <ul className="cartItem__info__btn">
          <h4>$ {item.price}</h4>
          <li>
            <span onClick={decreaseCart(item.id)}></span>
            <p>{item.quantity}</p>
            <span
              onClick={() => {
                increaseCart(item.id);
              }}
            ></span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default CartItem;
