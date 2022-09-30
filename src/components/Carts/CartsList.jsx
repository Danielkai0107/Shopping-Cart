import React, { useContext } from 'react';
import { AppContext } from '../../func/context';
import CartItem from './CartItem';

const CartsList = () => {
  const { carts, cartsOpen, setCartsOpen, totalPrice, removeAllCart } =
    useContext(AppContext);
  return (
    <>
      {cartsOpen && (
        <aside className="cartsContainer">
          <article
            className="cartsCloseArea"
            onClick={() => {
              setCartsOpen(false);
            }}
          ></article>
          <article className="carts">
            <ul className="carts__title">
              <h2>SHOPPING CART</h2>
              <li onClick={removeAllCart}>
                <span></span>
                <h3>REMOVE ALL</h3>
              </li>
            </ul>
            <div className="carts__list">
              {carts.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>
            <section className="carts__total">
              <h1>TOTAL : $ {totalPrice} US</h1>
              <div className="carts__total__payBtn">
                <span>前往結帳</span>
              </div>
            </section>
          </article>
        </aside>
      )}
    </>
  );
};

export default CartsList;
