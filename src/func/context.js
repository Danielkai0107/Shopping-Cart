import { createContext, useEffect, useState } from 'react';
import { apiSimilarList } from './WebAPI';

export const AppContext = createContext({});

export function AppProvider({ children }) {
  const [singleProduct, setSingleProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [cartsOpen, setCartsOpen] = useState(false);
  const [productPageLoading, setProductPageLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [successAlert, setSuccessAlert] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const productData = (await apiSimilarList()).data;

        setSingleProduct(productData[19]);
        setProducts(productData);
        setProductPageLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    const sum = carts.reduce((pre, curr) => pre + curr.sum, 0);
    setTotalPrice(
      sum.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ','),
    );
  }, [carts]);

  const AlertAnimation = () => {
    setSuccessAlert(true);
    setTimeout(() => {
      setSuccessAlert(false);
    }, 800);
  };

  function increaseCart(id) {
    const select = products.find((i) => i.id === id);

    setCarts((curr) => {
      if (carts.find((item) => item.id === id) == null) {
        return [...curr, { ...select, quantity: 1, sum: select.price }];
      } else {
        return curr.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              sum: item.price * (item.quantity + 1),
            };
          }
          return item;
        });
      }
    });
  }

  const decreaseCart = (id) => () => {
    setCarts((curr) => {
      if (curr.find((item) => item.id === id).quantity === 1) {
        return curr.filter((item) => item.id !== id);
      } else {
        return curr.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
              sum: item.price * (item.quantity - 1),
            };
          }
          return item;
        });
      }
    });
  };

  const removeCartItem = (id) => () => {
    setCarts((curr) => curr.filter((item) => item.id !== id));
  };

  const removeAllCart = () => {
    setCarts([]);
  };

  const showProduct = (id) => () => {
    const select = products.find((item) => item.id === id);
    setSingleProduct(select);
    setCartsOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        carts,
        products,
        cartsOpen,
        singleProduct,
        productPageLoading,
        totalPrice,
        successAlert,
        setCarts,
        setSingleProduct,
        increaseCart,
        setCartsOpen,
        showProduct,
        decreaseCart,
        removeAllCart,
        removeCartItem,
        AlertAnimation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
