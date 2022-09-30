/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useContext } from 'react';
import { AppContext } from '../../func/context';
import SliderList from '../Slider/SliderList';
import SimilarItem from './SimilarItem';

const ProductList = () => {
  const { products } = useContext(AppContext);

  return (
    <article className="product__list product--font">
      <section className="product__list__subscribe">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
      <section className="product__list__menu">
        <SliderList>
          {products.map((item) => (
            <SimilarItem item={item} key={item.id} />
          ))}
        </SliderList>
      </section>
    </article>
  );
};

export default ProductList;
