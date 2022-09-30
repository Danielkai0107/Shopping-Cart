import React, { useContext, useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { AppContext } from '../../func/context';

const ProductInfo = () => {
  const {
    singleProduct,
    products,
    setSingleProduct,
    increaseCart,
    successAlert,
    AlertAnimation,
  } = useContext(AppContext);

  const handleNextClick = (id) => () => {
    const next = products.find((item) => {
      if (id === products.length) {
        return item.id === 1;
      } else {
        return item.id === id + 1;
      }
    });
    next && setSingleProduct(next);
  };

  const handlePreClick = (id) => () => {
    const pre = products.find((item) => {
      if (id === 1) {
        return item.id === products.length;
      } else {
        return item.id === id - 1;
      }
    });
    pre && setSingleProduct(pre);
  };

  return (
    <article className="product__container product--font">
      {successAlert && (
        <section className="product__alert fadeAlert">
          <span></span>
          <span>添加成功</span>
        </section>
      )}
      <section className="info">
        <ul className="info__content">
          <li>
            <p>{singleProduct.category}</p>
          </li>
          <li>
            <h1>{singleProduct.title}</h1>
          </li>
          <li className="info__content__desc">
            <p>{singleProduct.description}</p>
          </li>
          <li>
            <h3>PRICE</h3>
            <h2>$ {singleProduct.price}</h2>
          </li>
          <li
            className="info__content__addBtn"
            onClick={() => {
              AlertAnimation();
              increaseCart(singleProduct.id);
            }}
          >
            <span>ADD TO CART</span>
          </li>
        </ul>
        <figure className="info__image ">
          <img src={singleProduct.image} alt={singleProduct.title} />
        </figure>
      </section>
      <ul className="detail">
        <li className="detail__btn">
          <span onClick={handlePreClick(singleProduct.id)}></span>
          <span onClick={handleNextClick(singleProduct.id)}></span>
        </li>
        <li className="detail__rate">
          <h3>RATE</h3>
          {singleProduct.rating.rate && (
            <ReactStars
              count={5}
              size={14}
              isHalf={true}
              edit={false}
              value={singleProduct.rating.rate}
            />
          )}

          <h4>{singleProduct.rating.rate}</h4>
        </li>
        <li>
          <h3>COUNT</h3>
          <h4>{singleProduct.rating.count}</h4>
        </li>
        <li className="detail__view">
          <h3>PRODUCT VIEW</h3>
          <figure>
            <img src={singleProduct.image} alt={singleProduct.title} />
          </figure>
        </li>
      </ul>
    </article>
  );
};

export default ProductInfo;
