import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  console.log("Cart log", cart);
  const total = cart.reduce((total, prd) => total + prd.price, 0);

  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    sum = sum + product.price;
  }
  let shipping = 0;
  if (shipping > 35) {
    shipping = 0;
  } else if (shipping > 20) {
    shipping = 12;
  } else if (sum > 0) {
    shipping = 10;
  }

  const tax = sum / 10;

  const numberFormatter = (num) => {
    const strValue = num.toFixed(2);
    return Number(strValue);
  };
  const grandTotal = sum + tax + shipping;
  return (
    <div>
      <h3>Order Summary</h3>
      <p>Items Ordered : {cart.length}</p>
      <p>Product Price : {numberFormatter(sum)}</p>
      <p>
        <small>Shiping cost :{numberFormatter(shipping)}</small>
      </p>
      <p>
        <small>Tax: {numberFormatter(tax)}</small>
      </p>
      <p>Total : {numberFormatter(grandTotal)}</p>
    </div>
  );
};

export default Cart;
