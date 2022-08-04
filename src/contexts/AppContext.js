import React, { useState, createContext } from "react";
import productsData from "../data/productsData";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState({ ...productsData });

  console.log(products);

  const addProduct = (productId) => {
    const updatedProducts = {
      ...products,
    };
    const updatedProduct = { ...updatedProducts[productId] };
    updatedProduct.qty = updatedProduct.qty + 1;
    updatedProducts[productId] = updatedProduct;
    setProducts(updatedProducts);
  };

  const removeProduct = (productId) => {
    const updatedProducts = {
      ...products,
    };
    const updatedProduct = { ...updatedProducts[productId] };
    updatedProduct.qty = updatedProduct.qty - 1;
    updatedProducts[productId] = updatedProduct;
    setProducts(updatedProducts);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        products,
        setProducts,
        addProduct,
        removeProduct,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
export default AppProvider;
