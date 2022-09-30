import React, { useContext } from 'react';
import { AppContext } from '../../func/context';

const SimilarItem = ({ item }) => {
  const { showProduct } = useContext(AppContext);

  return (
    <div>
      <ul className="similarItem" onClick={showProduct(item.id)}>
        <li className="similarItem__img">
          <img src={item.image} alt="" />
        </li>
        <li className="similarItem__info">
          <h3>{item.title}</h3>
          <h3>${item.price}</h3>
        </li>
      </ul>
    </div>
  );
};

export default SimilarItem;
