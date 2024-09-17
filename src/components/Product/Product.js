import React from "react";
import "./Product.css";
import { FaShoppingCart } from "react-icons/fa";

const product = (props) => {
  // console.log(props.product.name);
  const { name, url, price, img, seller, stock } = props.product;

  return (
    <div className="product-section">
      <div className="img-container">
        <img src={img} alt="" />
      </div>

      <div className="product-details">
        <h4>{name}</h4>
        <p>
          <small>by-{seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left in stock - order soon.</small>
        </p>

        <button
          className="btn-add-to-cart"
          onClick={() => {
            props.handleAddProduct(props.product);
          }}
        >
          <FaShoppingCart className="cart-icon" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default product;
