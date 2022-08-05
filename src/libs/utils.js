export const totalQtyAmount = (qty, price) => {
  return qty * price;
};

export const totalOrderQty = (cartProducts) => {
  return Object.keys(cartProducts).reduce((prev, cur) => {
    return cartProducts[cur].qty + prev;
  }, 0);
};

export const totalOrderValue = (cartProducts) => {
  return Object.keys(cartProducts).reduce((prev, cur) => {
    return cartProducts[cur].price * cartProducts[cur].qty + prev;
  }, 0);
};

export const filterCartProducts = (products) => {
  return Object.keys(products).filter((el) => products[el].qty !== 0);
};

export const resolve = (path, obj) => {
  return path.split(".").reduce(function (prev, curr) {
    return prev ? prev[curr] : null;
  }, obj);
};
