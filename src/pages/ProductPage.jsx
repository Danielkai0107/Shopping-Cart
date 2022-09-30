import React, { useContext } from 'react';
import CartsList from '../components/Carts/CartsList';
import ProductInfo from '../components/ProductPage/ProductInfo';
import ProductList from '../components/ProductPage/ProductList';
import { AppContext } from '../func/context';

const ProductPage = () => {
  const { productPageLoading } = useContext(AppContext);

  return (
    <>
      {!productPageLoading && (
        <main className="product">
          <ProductInfo />
          <ProductList />
          <CartsList />
        </main>
      )}
    </>
  );
};

export default ProductPage;
